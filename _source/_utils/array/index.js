export const swapArrayElements = (arr, indexA, indexB) => {
  const temp = arr[indexA];

  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
};

export const arrayMove = (arr, fromIndex, toIndex) => {
  const element = arr[fromIndex];

  arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, element);
}
