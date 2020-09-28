import { swapArrayElements, arrayMove } from './index';

describe('swapArrayElements', () => {
  it('swaps array elements', () => {
    const array = ['1', '2', '3'];

    swapArrayElements(array, 0, 2);

    expect(array).toEqual(['3', '2', '1']);
  });
});

describe('arrayMove', () => {
  it('moves an array element', () => {
    const array = ['1', '2', '3'];

    arrayMove(array, 0, 2);

    expect(array).toEqual(['2', '3', '1']);
  });
});
