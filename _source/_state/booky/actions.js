import fetcher from '../../_utils/fetch';

export const LOGIN = 'LOGIN';

export function login(params) {
  console.log('fetch', params);

  fetcher({
    url: '/login',
    type: 'POST',
    params,
    onSuccess: (data) => { console.log('success:', data); },
    onError: (error) => { console.log('error:', error); }
  });

  return {
    type: LOGIN,
    params
  };
}
