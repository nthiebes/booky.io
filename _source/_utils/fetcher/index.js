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


const fetcher = ({ params, type = 'GET', url, onSuccess, onError, options = {} }) => {
  if (type === 'GET') {
    fetch(`${baseUrl}${url}`, {
      ...defaultOptions,
      ...options
    })
      .then((response) => response.json())
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
