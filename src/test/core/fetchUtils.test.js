import {setPollingFetch} from '../../main/core/fetch-utils';

describe('setPollingFetch', () => {

  it('polls ten times per 1 sec', async () => {
    const fn = jest.fn();
    setPollingFetch(fn, 90);
    await new Promise((r) => setTimeout(r, 1000));
    expect(fn).toHaveBeenCalledTimes(10);
  });

  it('polls 5 times and aborted per 1 sec', async () => {
    const fn = jest.fn();
    const cancel = setPollingFetch(fn, 90);
    setTimeout(cancel, 500);
    await new Promise((r) => setTimeout(r, 1000));
    expect(fn).toHaveBeenCalledTimes(5);
  })

});
