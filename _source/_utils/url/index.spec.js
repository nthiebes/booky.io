import { parseBookmarkUrl, isSafeUrl } from './index';

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

describe('isSafeUrl', () => {
  it('allows regular urls', () => {
    expect(isSafeUrl('https://booky.io')).toBe(true);
    expect(isSafeUrl('//booky.io')).toBe(true);
    expect(isSafeUrl('ftp://booky.io')).toBe(true);
    expect(isSafeUrl('https://booky.io/?q=javascript:alert(1)')).toBe(true);
  });

  it('rejects urls that run code', () => {
    expect(isSafeUrl('javascript:alert(1)')).toBe(false);
    expect(isSafeUrl('javascript://%0Aalert(1)')).toBe(false);
    expect(isSafeUrl('JaVaScRiPt:alert(1)')).toBe(false);
    expect(isSafeUrl(' \u0001javascript:alert(1)')).toBe(false);
    expect(isSafeUrl('java\tscr\nipt:alert(1)')).toBe(false);
    expect(isSafeUrl('vbscript:msgbox(1)')).toBe(false);
    expect(isSafeUrl('data:text/html,<script>alert(1)</script>')).toBe(false);
  });

  it('rejects non-strings', () => {
    expect(isSafeUrl(undefined)).toBe(false);
    expect(isSafeUrl(null)).toBe(false);
  });
});
