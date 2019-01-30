import 'whatwg-fetch';

// eslint-disable-next-line
const baseUrl = window.___browserSync___ ? `http://${document.location.hostname}:8001/api` : '/api';
const defaultOptions = {
  credentials: 'include'
};

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return {
      data: response
    };
  }

  return {
    data: response,
    error: response.message || response.statusText
  };
};

const fetcher = ({ params, type = 'GET', url, onSuccess, onError, options = {} }) => {
  if (type === 'GET') {
    fetch(`${baseUrl}${url}`, {
      ...defaultOptions,
      ...options
    })
      .then((response) => {
        const { data, error } = checkStatus(response);

        if (error) {
          onError(error);
        } else {
          onSuccess(data);
        }
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
      .then((response) => {
        const { data, error } = checkStatus(response);

        if (error) {
          onError(error);
        } else {
          onSuccess(data);
        }
      })
      .catch((error) => {
        onError(error);
      });
  }
};

export default fetcher;
