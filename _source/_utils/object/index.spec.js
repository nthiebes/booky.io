import { removeUndefined, removeEmpty } from './index';

describe('removeUndefined', () => {
  it('removes an undefined value', () => {
    expect(removeUndefined({
      super: 'defined',
      // eslint-disable-next-line no-undefined
      really: undefined
    })).toEqual({
      super: 'defined'
    });
  });
});

describe('removeEmpty', () => {
  it('removes an empty value', () => {
    expect(removeEmpty({
      super: 'filled',
      empty: ''
    })).toEqual({
      super: 'filled'
    });
  });
});
