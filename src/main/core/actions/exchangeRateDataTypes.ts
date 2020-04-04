import {IExchangeRateData} from '../reducers/reduceExchangeRateData';

export const UPDATE_EXCHANGE_RATE_DATA = 'update_exchange_rate_data';
export const SET_EXCHANGE_RATE_ERRORS = 'set_exchange_rate_errors';

interface UpdateExchangeRateDataAction {
  type: typeof UPDATE_EXCHANGE_RATE_DATA;
  payload: IExchangeRateData;
}

interface SetExchangeRateErrorsAction {
  type: typeof SET_EXCHANGE_RATE_ERRORS;
  payload: Error;
}

export type exchangeRateDataTypes = UpdateExchangeRateDataAction | SetExchangeRateErrorsAction;
