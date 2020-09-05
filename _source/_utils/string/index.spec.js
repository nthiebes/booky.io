import { encodeEmoji, decodeEmoji } from './index';

describe('encodeEmoji', () => {
  it('url encodes a string', () => {
    expect(encodeEmoji('🐱-Rocky')).toBe('%F0%9F%90%B1-Rocky');
  });
});

describe('decodeEmoji', () => {
  it('url decodes a string', () => {
    expect(decodeEmoji('%F0%9F%90%B1-Rocky')).toBe('🐱-Rocky');
  });

  it('url decodes a string with broken emoji', () => {
    expect(decodeEmoji('%F0%9F%92%AA%F0%9F%92%A')).toBe('💪');
  });
});
