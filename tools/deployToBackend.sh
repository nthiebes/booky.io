#!/usr/bin/env bash
# Builds the frontend and copies it into a checkout of the backend (booky.io-Backend):
#   _public/index.html     -> <backend>/templates/booky/index.phtml   (rendered by the backend's IndexPage)
#   _public/prerendered/   -> <backend>/templates/booky/prerendered/  (served by IndexPage for public pages)
#   everything else        -> <backend>/public/                       (served directly by nginx)
# All must always be updated together: the HTML references the hashed main.*.js/css bundles.
#
# Usage: npm run deploy:backend [-- <backend-dir>] [-- --skip-build]
#   <backend-dir> defaults to $BOOKY_BACKEND_DIR, then ../booky.io-Backend.
#
# Old hashed bundles in public/ are kept on purpose, so browsers with a cached index.html still work.
set -euo pipefail

cd "$(dirname "$0")/.."

skip_build=false
backend_dir="${BOOKY_BACKEND_DIR:-../booky.io-Backend}"
for arg in "$@"; do
  case "$arg" in
    --skip-build) skip_build=true ;;
    *) backend_dir="$arg" ;;
  esac
done

fail() {
  echo "deploy:backend: $*" >&2
  exit 1
}

[ -d "$backend_dir/templates/booky" ] && [ -f "$backend_dir/public/index.php" ] \
  || fail "'$backend_dir' does not look like a booky.io-Backend checkout"

build_marker="$(mktemp)"
trap 'rm -f "$build_marker"' EXIT

if [ "$skip_build" = false ]; then
  # tools/build.js does not exit non-zero on webpack errors, so the output is verified below.
  npm run build
fi

index_html="_public/index.html"
[ -f "$index_html" ] || fail "$index_html not found, did the build fail?"
if [ "$skip_build" = false ] && [ "$index_html" -ot "$build_marker" ]; then
  fail "$index_html was not regenerated, the build probably failed"
fi

# Every bundle referenced by index.html must exist, otherwise the deployed page would be blank.
bundles=$(grep -oE '/main\.[a-f0-9]+\.(js|css)' "$index_html" | sed 's#^/##' || true)
[ -n "$bundles" ] || fail "no main.*.js/css bundle referenced in $index_html"
for bundle in $bundles; do
  [ -f "_public/$bundle" ] || fail "$index_html references _public/$bundle, which does not exist"
done

prerendered="_public/prerendered"
[ -f "$prerendered/home.html" ] || fail "$prerendered/home.html not found, did the prerender fail?"
if [ "$skip_build" = false ] && [ "$prerendered/home.html" -ot "$build_marker" ]; then
  fail "$prerendered was not regenerated, the prerender probably failed"
fi

rsync -a --exclude 'index.html' --exclude 'index.php' --exclude 'prerendered' _public/ "$backend_dir/public/"
cp "$index_html" "$backend_dir/templates/booky/index.phtml"
rsync -a --delete "$prerendered/" "$backend_dir/templates/booky/prerendered/"

echo "deploy:backend: copied frontend into $backend_dir"
echo "  templates/booky/index.phtml now loads: $(echo "$bundles" | tr '\n' ' ')"
echo "  Run tools/deploy.sh in the backend to package everything (the frontend files are gitignored there)."
