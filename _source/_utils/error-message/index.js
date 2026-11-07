export const DEFAULT_ERROR = 'error.default';

// Backend keys get more specific from left to right, e.g. error.notFound.category. When a
// specific key has no translation, these generic ones describe it well enough.
const GENERIC_ERRORS = ['error.badRequest', 'error.notFound'];

/**
 * Returns a translation key for an error from the backend that exists in the messages, so users
 * never see a raw key like "error.paypal.connection".
 */
const hasMessage = (messages, id) =>
  Object.prototype.hasOwnProperty.call(messages, id);

const resolveErrorMessageId = (id, messages) => {
  if (!messages) {
    return id || DEFAULT_ERROR;
  }

  if (typeof id === 'string' && hasMessage(messages, id)) {
    return id;
  }

  const generic =
    typeof id === 'string' &&
    GENERIC_ERRORS.find((key) => id.startsWith(`${key}.`));

  return generic && hasMessage(messages, generic) ? generic : DEFAULT_ERROR;
};

export default resolveErrorMessageId;
