import {useFetchApi} from '../../core/CustomHooks';
import {IExchangeRateData} from '../../core/reducers/reduceExchangeRateData';

/**
 * Use this hook to make a single fetch on 'ComponentDidMount'.
 */
export const useExchangeRateApi = () => {
  return useFetchApi<IExchangeRateData | null>({
    request: 'https://api.exchangerate-api.com/v5/latest',
    initialState: null,
  });
};
