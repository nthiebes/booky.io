import 'whatwg-fetch';

// eslint-disable-next-line
const baseUrl = window.___browserSync___ ? `http://${document.location.hostname}:8001/api` : '/api';
const defaultOptions = {
  // credentials: 'same-origin'
};
// window.___browserSync___ ? 'include' : 'same-origin'

// function checkStatus(response) {
//   console.log('response', response);
//   if (response.status >= 200 && response.status < 300) {
//     return response;
//   }
  
//   const error = new Error(response.statusText);

//   error.response = response;
//   throw error;
// }

const fetcher = function({ params, type = 'GET', url, onSuccess, onError, options = {} }) {
  if (type === 'GET') {
    fetch(`${baseUrl}${url}`, {
      ...defaultOptions,
      ...options
    })
      // .then(checkStatus)
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
      // .then(checkStatus)
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
