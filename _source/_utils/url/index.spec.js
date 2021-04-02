import { parseBookmarkUrl } from './index';

describe('parseBookmarkUrl', () => {
  it('transforms url into protocol relative url', () => {
    expect(parseBookmarkUrl('Rocky.cat')).toBe('//Rocky.cat');
  });

  it('does not modify the url if it already has a protocol', () => {
    expect(parseBookmarkUrl('whatever://Amy.cat')).toBe('whatever://Amy.cat');
  });

  it('uses a specified protocol', () => {
    expect(parseBookmarkUrl('Mokey.cat', { protocol: 'whatever' })).toBe(
      'whatever://Mokey.cat'
    );
  });

  it('removes special characters', () => {
    expect(parseBookmarkUrl('radis­son-blu.es')).toBe('//radisson-blu.es');
    expect(
      parseBookmarkUrl(
        '‪https://www.smashingmagazine.com/2018/06/bringing-personality-back-to-the-web/‬'
      )
    ).toBe(
      'https://www.smashingmagazine.com/2018/06/bringing-personality-back-to-the-web/'
    );
  });
});
