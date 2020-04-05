import {abortableFetch, getFetchJson, IAbortableFetch} from '../../core/fetch-utils';
import {Dispatch} from 'redux';
import {
  exchangeRateDataTypes,
  SET_EXCHANGE_RATE_ERRORS,
  UPDATE_EXCHANGE_RATE_DATA
} from '../../core/actions/exchangeRateDataTypes';
import {IExchangeRateData, IRatesData} from '../../core/reducers/reduceExchangeRateData';
import {IPocket} from '../../core/reducers/reducePockets';
import {formatNumberToString} from '../../core/calculation-utils';

export const fetchExchangeRateApi = async (dispatch: Dispatch<exchangeRateDataTypes>): Promise<IAbortableFetch> => {
  const fetchObj = abortableFetch('https://api.exchangerate-api.com/v5/latest');

  // Return MockRateData in case of error rate limiting from API.
  // const result = await getFetchJson<IExchangeRateData>(
  //     fetchObj.ready,
  //     () => dispatch({
  //       type: UPDATE_EXCHANGE_RATE_DATA,
  //       payload: MockRateData,
  //     })
  // );

  // This is a right way to handle errors.

  const result = await getFetchJson<IExchangeRateData>(
      fetchObj.ready,
      (error) => dispatch({
        type: SET_EXCHANGE_RATE_ERRORS,
        payload: error
      })
  );

  if (result) {
    dispatch({
      type: UPDATE_EXCHANGE_RATE_DATA,
      payload: result
    })
  }
  return fetchObj;

  // dispatch({
  //   type: UPDATE_EXCHANGE_RATE_DATA,
  //   payload: {
  //     ...MockRateData,
  //   },
  // });
  //
  // return {
  //   ready: fetch(''),
  //   abort: () => {},
  // }
};

export const getCrossRate = (pocket1: IPocket, pocket2: IPocket, rates: IRatesData, base: string): number => {
  return parseFloat(formatNumberToString(
      pocket1.name === base
          ? rates[pocket2.name]
          : rates[pocket2.name] / rates[pocket1.name]
      , 4)
  );
};
