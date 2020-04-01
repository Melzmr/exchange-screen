export const abortableFetch = (request: RequestInfo, options?: RequestInit) => {
  const controller = new AbortController();
  const signal = controller.signal;

  return {
    abort: () => controller.abort(),
    ready: fetch(request, {...options, signal})
  };
};

export const getFetchJson = async <T>(promise: Promise<Response>, onError: (error: Error) => void): Promise<T | undefined> => {
  return await promise
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error(`Failed to fetch ${res.url}.`)
        }
      })
      .then((data) => data)
      .catch((error: Error) => {
        onError(error)
      });
};
