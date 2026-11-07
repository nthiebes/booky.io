import loadUser, { USER_STATES } from './index';

const createFetcher = (results) => {
  const fetcher = jest.fn(({ onSuccess, onError }) => {
    const { data, error } = results[fetcher.mock.calls.length - 1];

    error ? onError(error) : onSuccess(data);
  });

  return fetcher;
};

describe('loadUser', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  const flushRetries = async () => {
    for (let i = 0; i < 5; i += 1) {
      jest.runOnlyPendingTimers();
      await Promise.resolve();
      await Promise.resolve();
    }
  };

  it('returns the user data', async () => {
    const fetcher = createFetcher([{ data: { name: 'someone' } }]);

    await expect(loadUser(fetcher)).resolves.toEqual({
      state: USER_STATES.LOGGED_IN,
      data: { name: 'someone' }
    });
    expect(fetcher).toHaveBeenCalledTimes(1);
  });

  it('treats a 401 as logged out without retrying', async () => {
    const fetcher = createFetcher([{ error: 'error.unauthorized' }]);

    await expect(loadUser(fetcher)).resolves.toEqual({
      state: USER_STATES.LOGGED_OUT
    });
    expect(fetcher).toHaveBeenCalledTimes(1);
  });

  it('retries other errors and logs the user in once a retry succeeds', async () => {
    const fetcher = createFetcher([
      { error: 'error.default' },
      { data: { name: 'someone' } }
    ]);
    const result = loadUser(fetcher);

    await flushRetries();

    await expect(result).resolves.toEqual({
      state: USER_STATES.LOGGED_IN,
      data: { name: 'someone' }
    });
    expect(fetcher).toHaveBeenCalledTimes(2);
  });

  it('reports the app as unavailable after three failed attempts', async () => {
    const fetcher = createFetcher([
      { error: 'error.default' },
      { error: 'Too many connections' },
      { error: 'error.default' }
    ]);
    const result = loadUser(fetcher);

    await flushRetries();

    await expect(result).resolves.toEqual({ state: USER_STATES.UNAVAILABLE });
    expect(fetcher).toHaveBeenCalledTimes(3);
  });

  it('treats a 401 on a retry as logged out', async () => {
    const fetcher = createFetcher([
      { error: 'error.default' },
      { error: 'error.unauthorized' }
    ]);
    const result = loadUser(fetcher);

    await flushRetries();

    await expect(result).resolves.toEqual({ state: USER_STATES.LOGGED_OUT });
  });
});
