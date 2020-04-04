import {abortableFetch, getFetchJson, IAbortableFetch} from '../../core/fetch-utils';
import {Dispatch} from 'redux';
import {exchangeRateDataTypes, UPDATE_EXCHANGE_RATE_DATA} from '../../core/actions/exchangeRateDataTypes';
import {IExchangeRateData} from '../../core/reducers/reduceExchangeRateData';
import {MockRateData} from './MockRateData';

export const fetchExchangeRateApi = async (dispatch: Dispatch<exchangeRateDataTypes>): Promise<IAbortableFetch> => {
  // const fetchObj = abortableFetch('https://api.exchangerate-api.com/v5/latest');
  dispatch({
    type: UPDATE_EXCHANGE_RATE_DATA,
    payload: {
      ...MockRateData,
    },
  });
  // Return MockRateData in case of error rate limiting from API.
  // const result = await getFetchJson<IExchangeRateData>(
  //     fetchObj.ready,
  //     () => dispatch({
  //       type: UPDATE_EXCHANGE_RATE_DATA,
  //       payload: MockRateData,
  //     })
  // );

  // This is a right way to handle errors.

  // const result = await getFetchJson<IExchangeRateData>(
  //     fetchObj.ready,
  //     (error) => dispatch({
  //       type: SET_EXCHANGE_RATE_ERRORS,
  //       payload: error
  //     })
  // );

  // if (result) {
  //   dispatch({
  //     type: UPDATE_EXCHANGE_RATE_DATA,
  //     payload: result
  //   })
  // }
  // return fetchObj;
  return {
    ready: fetch(''),
    abort: () => {},
  }
};
