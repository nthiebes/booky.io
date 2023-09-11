import fetcher from '../../_utils/fetcher';
import { track } from '../../_utils/tracking';

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
        track.supporter.subscribe(supportAmount);

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
        track.supporter.update(supportAmount);

        onSuccess && onSuccess(data);
      },
      onError: (error) => {
        onError && onError(error);
      }
    });
  };

export const cancelSubscription =
  ({ onError, onSuccess }) =>
  (dispatch) => {
    fetcher({
      url: '/subscriptions',
      method: 'DELETE',
      onSuccess: (data) => {
        track.supporter.cancel();

        dispatch({
          type: 'UPDATE_USER',
          userData: {
            supportExpiration: data.supportExpiration
          }
        });

        onSuccess && onSuccess(data);
      },
      onError: (error) => {
        onError && onError(error);
      }
    });
  };
