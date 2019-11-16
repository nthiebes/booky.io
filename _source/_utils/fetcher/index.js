import 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only';

const baseUrl = process.env.NODE_ENV === 'development'
  ? `http://${document.location.hostname}:8001/api`
  : '/api';
const defaultOptions = {
  credentials: process.env.NODE_ENV === 'development' ? 'include' : 'same-origin'
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
  })
;
const checkEmptyResponse = (response) => {
  if (response.statusText === 'No Content' || response.status === 204) {
    return {};
  }

  return response.json();
};
const abortFetch = () => {
  controller && controller.abort();
};
const fetcher = ({ params, method = 'GET', url, onSuccess, onError, options = {} }) => {
  controller = new AbortController();

  if (method === 'GET') {
    fetch(`${baseUrl}${url}`, {
      ...defaultOptions,
      ...options,
      signal: controller.signal
    })
      .then((response) => checkEmptyResponse(response))
      .then(formatResponse)
      .then((response) => {
        // console.log('success', response);
        const { data, error } = response;

        if (error) {
          onError(error);
        } else {
          onSuccess(data);
        }
      })
      .catch((error) => {
        // console.log('error', error);
        onError(error.statusText || 'error.default');
      });
  }

  if (method === 'POST' || method === 'DELETE' || method === 'PUT' || method === 'PATCH') {
    fetch(`${baseUrl}${url}`, {
      ...defaultOptions,
      ...options,
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params),
      signal: controller.signal
    })
      .then((response) => checkEmptyResponse(response))
      .then(formatResponse)
      .then((response) => {
        // console.log('response', response);
        const { data, error } = response;

        if (error) {
          onError(error);
        } else {
          onSuccess(data);
        }
      })
      .catch((error) => {
        // console.log('catchy error', error);
        onError(error.statusText || 'error.default');
      });
  }
};

export { abortFetch };

export default fetcher;
