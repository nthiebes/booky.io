import { config } from '../../config';

export const postMessage = (data) => {
  const extension = window.parent;

  extension.postMessage(data, `chrome-extension://${config.extensionId}`);
};
