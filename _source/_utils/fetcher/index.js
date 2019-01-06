import 'whatwg-fetch';

// eslint-disable-next-line
const baseUrl = window.___browserSync___ ? `http://${document.location.hostname}:8001/api` : '/api';
const defaultOptions = {
  credentials: 'include'
};

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }

  return Promise.reject(new Error(response.statusText));
}

const fetcher = function({ params, type = 'GET', url, onSuccess, onError, options = {} }) {
  if (type === 'GET') {
    fetch(`${baseUrl}${url}`, {
      ...defaultOptions,
      ...options
    })
      .then(checkStatus)
      .then((response) => response.json())
      .then((data) => {
        onSuccess(data);
      })
      .catch((error) => {
        onError(error);
      });
  }

  if (type === 'POST') {
    fetch(`${baseUrl}${url}`, {
      ...defaultOptions,
      ...options,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
      .then(checkStatus)
      .then((response) => response.json())
      .then((data) => {
        onSuccess(data);
      })
      .catch((error) => {
        onError(error);
      });
  }
};

export default fetcher;
