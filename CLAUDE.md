# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Frontend of [booky.io](https://booky.io), an online bookmark manager. React 17 + Redux (thunk) + react-router 5, structured by Atomic Design with BEM-named SCSS. The backend API is a separate project and is not in this repo.

## Commands

- `npm start` — dev server (browser-sync + webpack hot middleware) on http://localhost:3000. In development the API is expected at `http://<hostname>:8001/api` (see `_source/_utils/fetcher`).
- `npm run build` — production build via `tools/build.js` / `webpack.config.prod.js`; `npm run open:public` serves the built output.
- `npm run lint` — ESLint (`lint:js`) + stylelint on `_source/**/*.scss` (`lint:css`).
- `npm test` — Jest (Enzyme with the React 17 adapter, set up in `tools/enzymeTestAdapterSetup.js`). Single file: `npx jest _source/_utils/string`.
- `npm run qa` — tests + lint.
- `npm run prettier` — format everything.
- `npm run cypress:open` — Cypress e2e (`cypress/integration`), needs the dev server running.
- `npm run extension:<chrome|firefox|opera|edge>` — package the browser extension (`extension/manifest.sh`).

Node >= 14 (enforced by `preinstall`).

## Architecture

### Directory layout in `_source/`
- `atoms/` → `molecules/` → `organisms/` → `templates/` → `pages/` — Atomic Design levels. Each component lives in its own folder with `Component.js`, `Component.scss`, and `index.js`.
- **Container pattern:** components that need Redux have a `XContainer.js` that does `connect(mapStateToProps, mapDispatchToProps)` on the presentational component, and `index.js` re-exports the *container*. Importing a folder gives you the connected version. Presentational components get state and actions only through props.
- `_state/<slice>/` — Redux slices, each with `actions.js` (plain action creators + thunks) and `reducer.js`, combined in `_source/reducers.js`. The initial shape is in `_source/initialState.js`; the store is in `configureStore.js` (includes `connected-react-router`, and `redux-immutable-state-invariant` in dev).
- `_utils/` — shared helpers (fetcher, string/emoji, url, language, tracking, …). These are where the few unit tests (`*.spec.js`) live.

### Data flow / API
- All HTTP goes through `_utils/fetcher` (`fetcher({ url, method, params, onSuccess, onError })`). It prefixes `/api`, JSON-encodes bodies for write methods, and automatically fetches and attaches a CSRF token (`X-CSRF-Token`) for POST/PUT/PATCH/DELETE and `/logout`, retrying once on a CSRF error.
- Thunks in `_state/*/actions.js` call `fetcher` and dispatch on success. Names (category, dashboard, bookmark) are emoji-encoded before sending and decoded on receipt (`encodeEmoji`/`decodeEmoji` from `_utils/string`). Keep this symmetric when adding endpoints.

### Bootstrapping & routing
- `_source/index.js` detects the language (cookie → localStorage → navigator; supported: `en`, `de`, `ja`, `hi`), fetches `/_assets/i18n/<lang>.json` and `/user`, then builds the store with the logged-in/logged-out state and renders `templates/booky`.
- `routes.js` lazy-loads most pages. Access is gated by the `restricted` (logged-in only) and `publicOnly` HOCs from `templates/`.

### i18n
- `react-intl` via `react-intl-redux`; messages are stored in Redux (`state.intl`). Strings live in `_source/_assets/i18n/{en,de,ja,hi}.json`. Add new keys to **all** language files. Use `intl.formatMessage({ id })` / `<FormattedMessage>`.

### Icons
- `atoms/icon` renders `<use xlinkHref="/_assets/symbol-defs.svg#icon-<name>">`. A new icon has to be added as a `<symbol id="icon-<name>">` in `_source/_assets/symbol-defs.svg`.

### Browser extension
- `extension/_source` is a small popup that embeds the web app in an iframe (`https://booky.io/extension/...`) and talks to it via `postMessage`. Inside the app, `state.extension.active` (e.g. `isExtension` props) switches to extension-specific behavior. The `templates/extension` template is used for those routes.

### Other
- `config.js` holds browser detection and feature version flags (`NEWS_VERSION`, `POLL_VERSION`) plus PayPal client/plan IDs that differ between dev and prod.
- Sentry is initialized only outside development.
- CI is GitLab (`.gitlab-ci.yml`): runs `test:cover`, and Cypress in Chrome/Firefox for external PRs.
