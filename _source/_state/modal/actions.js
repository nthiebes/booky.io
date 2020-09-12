export const openModal = (modal, data) => ({
  type: 'OPEN_MODAL',
  modal,
  data
});

export const closeModal = () => ({
  type: 'CLOSE_MODAL'
});

export const hideModal = () => ({
  type: 'HIDE_MODAL'
});
