export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export function openModal(modal) {
  return {
    type: OPEN_MODAL,
    modal
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  };
}
