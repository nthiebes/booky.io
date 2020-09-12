export const throttle = (fn, wait) => {
  let time = Date.now();

  return () => {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  };
};
