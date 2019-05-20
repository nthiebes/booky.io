import 'whatwg-fetch';

// eslint-disable-next-line
const baseUrl = window.___browserSync___ ? `http://${document.location.hostname}:8001/api` : '/api';
const defaultOptions = {
  credentials: 'include'
};

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


const fetcher = ({ params, method = 'GET', url, onSuccess, onError, noResponse, options = {} }) => {
  if (method === 'GET') {
    fetch(`${baseUrl}${url}`, {
      ...defaultOptions,
      ...options
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
    fetch(`${baseUrl}${url}`, {
      ...defaultOptions,
      ...options,
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
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

export default fetcher;
