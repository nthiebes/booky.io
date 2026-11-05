import { createDuplicateCheck } from './index';

const setup = ({ ignoreId } = {}) => {
  const requests = [];
  const onChange = jest.fn();
  const check = createDuplicateCheck({
    getDuplicates: (request) => requests.push(request),
    onChange,
    ignoreId
  });

  return { check, requests, onChange, last: () => onChange.mock.lastCall[0] };
};

describe('createDuplicateCheck', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should send one request 500ms after the last change', () => {
    const { check, requests } = setup();

    check.checkDelayed('https://b');
    jest.advanceTimersByTime(499);
    check.checkDelayed('https://booky.io');
    jest.advanceTimersByTime(499);

    expect(requests).toHaveLength(0);

    jest.advanceTimersByTime(1);

    expect(requests).toHaveLength(1);
    expect(requests[0].url).toBe(encodeURIComponent('https://booky.io'));
  });

  it('should send the URL in the format it gets saved in', () => {
    const { check, requests } = setup();

    check.checkNow('booky.io');

    expect(requests[0].url).toBe(encodeURIComponent('//booky.io'));
  });

  it('should show a pending state only while the request runs', () => {
    const { check, requests, last } = setup();

    check.checkDelayed('https://booky.io');

    expect(last().duplicatePending).toBe(false);

    jest.advanceTimersByTime(500);

    expect(last().duplicatePending).toBe(true);

    requests[0].onSuccess({ bookmarks: [] });

    expect(last().duplicatePending).toBe(false);
  });

  it('should report duplicates', () => {
    const { check, requests, last } = setup();
    const bookmarks = [{ id: 1 }];

    check.checkNow('https://booky.io');
    requests[0].onSuccess({ bookmarks });

    expect(last()).toEqual({
      exists: true,
      existingBookmarks: bookmarks,
      duplicatePending: false
    });
  });

  it('should clear the result for an empty URL without a request', () => {
    const { check, requests, last } = setup();

    check.checkDelayed('  ');
    jest.advanceTimersByTime(500);

    expect(requests).toHaveLength(0);
    expect(last().exists).toBe(false);
  });

  it('should ignore responses to older URLs', () => {
    const { check, requests, last } = setup();

    check.checkNow('https://old.test');
    check.checkNow('https://new.test');
    requests[1].onSuccess({ bookmarks: [] });
    requests[0].onSuccess({ bookmarks: [{ id: 1 }] });

    expect(last().exists).toBe(false);
  });

  it('should send nothing and ignore responses after cancel', () => {
    const { check, requests, onChange } = setup();

    check.checkNow('https://first.test');
    check.checkDelayed('https://second.test');
    check.cancel();
    jest.advanceTimersByTime(500);

    expect(requests).toHaveLength(1);

    onChange.mockClear();
    requests[0].onSuccess({ bookmarks: [{ id: 1 }] });

    expect(onChange).not.toHaveBeenCalled();
  });

  it('should not report the ignored bookmark as its own duplicate', () => {
    const { check, requests, last } = setup({ ignoreId: 1 });

    check.checkNow('https://booky.io/');
    requests[0].onSuccess({ bookmarks: [{ id: 1 }] });

    expect(last().exists).toBe(false);
    expect(last().existingBookmarks).toEqual([]);
  });

  it('should end the pending state after an error or abort', () => {
    const { check, requests, last } = setup();

    check.checkNow('https://error.test');
    requests[0].onError('error.default');

    expect(last().duplicatePending).toBe(false);

    check.checkNow('https://abort.test');
    requests[1].onAbort();

    expect(last().duplicatePending).toBe(false);
  });
});
