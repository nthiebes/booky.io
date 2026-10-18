import 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only';

const baseUrl =
  process.env.NODE_ENV === 'development'
    ? `http://${document.location.hostname}:8001/api`
    : '/api';
const defaultOptions = {
  credentials:
    process.env.NODE_ENV === 'development' ? 'include' : 'same-origin'
};
let controller;
const formatResponse = (response) =>
  // if (response.status >= 200 && response.status < 300) {
  //   return response;
  // }

  // const error = new Error(response.statusText);

  // error.response = response;
  // throw error;

  ({
    data: response,
    error: response.message || response.error
  });
const checkEmptyResponse = (response) => {
  if (response.statusText === 'No Content' || response.status === 204) {
    return {};
  }

  return response.json();
};
const abortFetch = () => {
  controller && controller.abort();
};
const CSRF_ERROR = 'error.forbidden.csrf';
const writeMethods = ['POST', 'DELETE', 'PUT', 'PATCH'];
let csrfToken = null;
let csrfRequest = null;
const requiresCsrfToken = (method, url) =>
  writeMethods.includes(method) || url === '/logout';
const getCsrfToken = () => {
  if (csrfToken) {
    return Promise.resolve(csrfToken);
  }

  if (!csrfRequest) {
    csrfRequest = fetch(`${baseUrl}/csrf-token`, defaultOptions)
      .then((response) => response.json())
      .then(({ token }) => {
        csrfToken = token;

        return token;
      })
      .finally(() => {
        csrfRequest = null;
      });
  }

  return csrfRequest;
};
const request = ({ method, url, params, options, csrf, signal }) =>
  fetch(`${baseUrl}${url}`, {
    ...defaultOptions,
    ...options,
    method,
    headers: {
      ...(writeMethods.includes(method) && {
        'Content-Type': 'application/json'
      }),
      ...(csrf && { 'X-CSRF-Token': csrf })
    },
    ...(writeMethods.includes(method) && { body: JSON.stringify(params) }),
    signal
  })
    .then((response) => checkEmptyResponse(response))
    .then(formatResponse);
const send = (requestOptions, retry = true) => {
  if (!requiresCsrfToken(requestOptions.method, requestOptions.url)) {
    return request(requestOptions);
  }

  return getCsrfToken()
    .then((csrf) => request({ ...requestOptions, csrf }))
    .then((response) => {
      if (response.error === CSRF_ERROR && retry) {
        // The session token changed (e.g. session expired), fetch a new one once
        csrfToken = null;

        return send(requestOptions, false);
      }

      if (requestOptions.url === '/logout') {
        // Logout destroys the session including its CSRF token
        csrfToken = null;
      }

      return response;
    });
};
const fetcher = ({
  params,
  method = 'GET',
  url,
  onSuccess,
  onError,
  options = {}
}) => {
  controller = new AbortController();

  send({ method, url, params, options, signal: controller.signal })
    .then((response) => {
      const { data, error } = response;

      if (error) {
        onError(error);
      } else {
        onSuccess(data);
      }
    })
    .catch((error) => {
      if (error.name !== 'AbortError') {
        onError(error.statusText || 'error.default');
      }
    });
};

export { abortFetch };

export default fetcher;
