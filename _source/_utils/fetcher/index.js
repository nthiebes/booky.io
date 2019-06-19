import 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only';
import { fetch } from 'whatwg-fetch';

// Use native browser implementation if it supports aborting
const abortableFetch = ('signal' in new Request('')) ? window.fetch : fetch;
const baseUrl = process.env.NODE_ENV === 'development' ? `http://${document.location.hostname}:8001/api` : '/api';
const defaultOptions = {
  credentials: process.env.NODE_ENV === 'development' ? 'include' : 'same-origin'
};
let controller;

const checkStatus = (response) => {
  // if (response.status >= 200 && response.status < 300) {
  //   return response;
  // }
  
  // const error = new Error(response.statusText);

  // error.response = response;
  // throw error;

  return {
    data: response,
    error: response.message
  };
};

const abortFetch = () => {
  controller && controller.abort();
};

const fetcher = ({ params, method = 'GET', url, onSuccess, onError, noResponse, options = {} }) => {
  controller = new AbortController();

  if (method === 'GET') {
    abortableFetch(`${baseUrl}${url}`, {
      ...defaultOptions,
      ...options,
      signal: controller.signal
    })
      .then((response) => noResponse ? response : response.json())
      .then(checkStatus)
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

  if (method === 'POST' || method === 'DELETE' || method === 'PUT') {
    abortableFetch(`${baseUrl}${url}`, {
      ...defaultOptions,
      ...options,
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params),
      signal: controller.signal
    })
      .then((response) => response.json())
      .then(checkStatus)
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
        // console.log('error', error);
        onError(error.statusText || 'error.default');
      });
  }
};

export { abortFetch };

export default fetcher;
