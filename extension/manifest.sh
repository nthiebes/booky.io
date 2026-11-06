#!/bin/bash
# Usage: ./manifest.sh <chrome|firefox|opera|edge>
# Builds _public/<browser>/<browser>_<version>.zip from _source/.

set -euo pipefail

browser="${1:-}"
version="3.2.0"

case "$browser" in
  chrome | firefox | opera | edge) ;;
  *)
    echo "Usage: $0 <chrome|firefox|opera|edge>" >&2
    exit 1
    ;;
esac

cd "$(dirname "$0")"

browser_specific_settings=""

if [ "$browser" == "firefox" ]
then
  browser_specific_settings="
  \"browser_specific_settings\": {
    \"gecko\": {
      \"id\": \"hello@booky.io\"
    }
  },"
fi

manifest() {
  echo "{
  \"name\": \"__MSG_appName__\",
  \"version\": \"${version}\",
  \"author\": \"Nico Thiebes\",
  \"description\": \"__MSG_appDesc__\",
  \"default_locale\": \"en\",
  \"content_security_policy\": {
    \"extension_pages\": \"default-src 'self'; frame-src 'self' http://localhost:3000 https://*.booky.io https://booky.io\"
  },
  \"permissions\": [\"activeTab\", \"management\",  \"storage\", \"scripting\"],
  \"optional_permissions\": [\"tabs\"],$1
  \"action\": {
    \"default_title\": \"booky.io Extension\",
    \"default_popup\": \"popup.html\",
    \"default_icon\": {
      \"16\": \"images/icon-16x16.png\",
      \"32\": \"images/icon-32x32.png\",
      \"48\": \"images/icon-48x48.png\",
      \"128\": \"images/icon-128x128.png\"
    }
  },
  \"options_ui\": {
    \"page\": \"options.html\",
    \"open_in_tab\": false
  },
  \"content_scripts\": [
    {
      \"matches\": [\"<all_urls>\"],
      \"js\": [\"content.js\"]
    }
  ],
  \"icons\": {
    \"16\": \"images/icon-16x16.png\",
    \"32\": \"images/icon-32x32.png\",
    \"48\": \"images/icon-48x48.png\",
    \"128\": \"images/icon-128x128.png\"
  },
  \"manifest_version\": 3
}"
}

# This script is the source of truth for the manifest. _source/manifest.json
# is generated for loading the unpacked extension locally, so it matches the
# browser that was built last.
manifest "$browser_specific_settings" > _source/manifest.json

out_dir="_public/$browser"
tmp="$out_dir/tmp"
zip_file="${browser}_${version}.zip"

mkdir -p "$out_dir"
rm -rf "$tmp"
cp -R _source "$tmp"

# Rebuild the archive from scratch so removed files don't linger in it.
rm -f "$out_dir/$zip_file"
(cd "$tmp" && zip -r -X "../$zip_file" . -x '.*' '*/.*')

rm -rf "$tmp"
echo "Created $out_dir/$zip_file"
