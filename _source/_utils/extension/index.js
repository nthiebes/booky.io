export const postMessage = (data) => {
  const extension = window.parent;

  extension.postMessage(data, '*');
};
