import React from 'react';
import {abortableFetch, getFetchJson, IAbortableFetch} from './fetch-utils';

export interface IFetchApiOptions<T> {
  request: RequestInfo;
  initialState: T;
}

export interface IFetchResult<T> {
  data: T;
  loading: boolean;
  errored: Error | null;
}

export const useFetchApi = <T>({request, initialState}: IFetchApiOptions<T>): Array<IFetchResult<T>> => {
  const [data, setData] = React.useState<T>(initialState);
  const [loading, setLoading] = React.useState(false);
  const [errored, setErrored] = React.useState<Error | null>(null);

  React.useEffect(() => {
    const fetchObj = abortableFetch(request);

    const fetchData = async () => {
      setLoading(true);
      setErrored(null);
      const result = await getFetchJson<T>(fetchObj.ready, setErrored);
      if (result) {
        setData(result);
      }
      setLoading(false);
      return () => fetchObj.abort()
    };
    fetchData();

    return fetchObj.abort;
  }, [request]);

  return [{data, loading, errored}];
};
