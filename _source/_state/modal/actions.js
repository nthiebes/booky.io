export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export function openModal(modal, data) {
  return {
    type: OPEN_MODAL,
    modal,
    data
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  };
}
