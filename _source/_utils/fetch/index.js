import 'whatwg-fetch';

const env = document.location.origin;
const baseUrl = document.location.origin;
const defaultOptions = {
  credentials: 'same-origin'
};

// function checkStatus(response) {
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
