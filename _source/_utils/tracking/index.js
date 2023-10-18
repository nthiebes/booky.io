/* eslint-disable camelcase */

export const track = {
  account: {
    register: () => {
      // window.gtag &&
      //   window.gtag('event', 'register', {
      //     event_category: 'account'
      //   });
    },
    activate: () => {
      // window.gtag &&
      //   window.gtag('event', 'activate', {
      //     event_category: 'account'
      //   });
    },
    delete: () => {
      // window.gtag &&
      //   window.gtag('event', 'delete', {
      //     event_category: 'account'
      //   });
    }
  },
  supporter: {
    subscribe: (value) => {
      // window.gtag &&
      //   window.gtag('event', 'subscribe', {
      //     event_category: 'supporter',
      //     value
      //   });
    },
    update: (value) => {
      // window.gtag &&
      //   window.gtag('event', 'update', {
      //     event_category: 'supporter',
      //     value
      //   });
    },
    cancel: () => {
      // window.gtag &&
      //   window.gtag('event', 'cancel', {
      //     event_category: 'supporter'
      //   });
    }
  }
};
