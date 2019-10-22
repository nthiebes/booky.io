export const removeUndefined = (object) => {
  const cleanObject = {
    ...object
  };

  Object.keys(cleanObject).forEach((key) => (
    // eslint-disable-next-line no-undefined
    cleanObject[key] === undefined && delete cleanObject[key])
  );

  return cleanObject;
};
