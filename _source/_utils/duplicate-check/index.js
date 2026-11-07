import { parseBookmarkUrl } from '../url';

const DELAY = 500;
const NO_DUPLICATES = {
  exists: false,
  existingBookmarks: [],
  duplicatePending: false
};

// Checks if a URL is already saved. Only the response to the newest URL counts.
export const createDuplicateCheck = ({
  getDuplicates,
  onChange,
  ignoreId = null
}) => {
  let timeout = null;
  let latestCheck = 0;

  const cancel = () => {
    clearTimeout(timeout);
    latestCheck += 1;
  };

  const run = (url) => {
    const check = latestCheck;
    const finish = (result) => {
      if (check === latestCheck) {
        onChange(result);
      }
    };

    onChange({ ...NO_DUPLICATES, duplicatePending: true });
    getDuplicates({
      url: encodeURIComponent(parseBookmarkUrl(url)),
      onSuccess: ({ bookmarks }) => {
        const existingBookmarks = bookmarks.filter(({ id }) => id !== ignoreId);

        finish({
          ...NO_DUPLICATES,
          exists: existingBookmarks.length > 0,
          existingBookmarks
        });
      },
      onError: () => finish(NO_DUPLICATES),
      onAbort: () => finish(NO_DUPLICATES)
    });
  };

  const start = (url, delay) => {
    const trimmedUrl = url.trim();

    cancel();
    onChange(NO_DUPLICATES);

    if (!trimmedUrl) {
      return;
    }

    if (delay) {
      timeout = setTimeout(() => run(trimmedUrl), delay);
    } else {
      run(trimmedUrl);
    }
  };

  return {
    checkDelayed: (url) => start(url, DELAY),
    checkNow: (url) => start(url, 0),
    cancel
  };
};
