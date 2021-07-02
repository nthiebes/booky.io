import fetcher from '../../_utils/fetcher';

export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';
export const RESET_USER_STATE = 'RESET_USER_STATE';

export const newSubscription =
  ({ subscriptionID, supportAmount, onError, onSuccess }) =>
  () => {
    fetcher({
      url: '/subscriptions',
      method: 'POST',
      params: {
        subscriptionId: subscriptionID,
        quantity: supportAmount
      },
      onSuccess: (data) => {
        onSuccess && onSuccess(data);
      },
      onError: (error) => {
        onError && onError(error);
      }
    });
  };

export const updateSubscription =
  ({ supportAmount, onError, onSuccess }) =>
  () => {
    fetcher({
      url: '/subscriptions',
      method: 'PATCH',
      params: {
        quantity: supportAmount
      },
      onSuccess: (data) => {
        onSuccess && onSuccess(data);
      },
      onError: (error) => {
        onError && onError(error);
      }
    });
  };

export const cancelSubscription =
  ({ onError, onSuccess }) =>
  () => {
    fetcher({
      url: '/subscriptions',
      method: 'DELETE',
      onSuccess: (data) => {
        onSuccess && onSuccess(data);
      },
      onError: (error) => {
        onError && onError(error);
      }
    });
  };
