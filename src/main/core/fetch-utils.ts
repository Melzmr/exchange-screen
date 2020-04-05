export interface IAbortableFetch {
  abort: () => void;
  ready: Promise<Response>
}

export const abortableFetch = (request: RequestInfo, options?: RequestInit): IAbortableFetch => {
  const controller = new AbortController();
  const signal = controller.signal;

  return {
    abort: () => controller.abort(),
    ready: fetch(request, {...options, signal})
  };
};

export const getFetchJson = async <T>(promise: Promise<Response>, onError: (error: Error) => void): Promise<T | void> => {
  return await promise
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error(`Failed to fetch ${res.url}.`)
        }
      })
      .then((data: T) => data)
      .catch((error: Error) => {
        onError(error)
      });
};

export const setPollingFetch = (callback: () => Promise<IAbortableFetch>, delay: number = 10000): () => void => {
  let id: number;
  let res: IAbortableFetch;
  async function tick() {
    res = await callback();
    id = window.setTimeout(tick, delay);
  }
  id = window.setTimeout(tick, delay);
  return () => {
    clearInterval(id);
    res.abort();
  };
};

