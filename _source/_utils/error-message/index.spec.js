import resolveErrorMessageId, { DEFAULT_ERROR } from './index';

const messages = {
  'error.default': 'Something went wrong',
  'error.email': 'email',
  'error.badRequest': 'Please check your input',
  'error.badRequest.email.invalidFormat': 'Must be a valid email address',
  'error.notFound': 'This no longer exists',
  'error.notFound.user': 'No account found'
};

describe('resolveErrorMessageId', () => {
  it('keeps keys that have a translation', () => {
    expect(resolveErrorMessageId('error.notFound.user', messages)).toBe(
      'error.notFound.user'
    );
    expect(
      resolveErrorMessageId('error.badRequest.email.invalidFormat', messages)
    ).toBe('error.badRequest.email.invalidFormat');
  });

  it('falls back to the generic message of the same kind', () => {
    expect(resolveErrorMessageId('error.notFound.category', messages)).toBe(
      'error.notFound'
    );
    expect(
      resolveErrorMessageId('error.badRequest.url.unrequestable', messages)
    ).toBe('error.badRequest');
  });

  it('falls back to the default message for other unknown keys', () => {
    expect(resolveErrorMessageId('error.paypal.connection', messages)).toBe(
      DEFAULT_ERROR
    );
    expect(resolveErrorMessageId('Bad Gateway', messages)).toBe(DEFAULT_ERROR);
    expect(resolveErrorMessageId(undefined, messages)).toBe(DEFAULT_ERROR);
  });

  it('does not treat unrelated keys with the same start as generic', () => {
    // error.email is the link text "email", not a message about emails.
    expect(resolveErrorMessageId('error.email.unknown', messages)).toBe(
      DEFAULT_ERROR
    );
  });

  it('keeps the key when no messages are loaded', () => {
    expect(resolveErrorMessageId('error.notFound.category')).toBe(
      'error.notFound.category'
    );
  });
});
