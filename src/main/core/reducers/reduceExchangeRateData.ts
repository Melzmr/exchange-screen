import {initialAppState} from '../createStore';
import {
  exchangeRateDataTypes,
  SET_EXCHANGE_RATE_ERRORS,
  UPDATE_EXCHANGE_RATE_DATA
} from '../actions/exchangeRateDataTypes';

export interface IExchangeRateData {
  'documentation': string;
  'terms_of_use': string;
  'time_zone': string;
  'time_last_update': number;
  'time_next_update': number;
  'time_eol': number;
  'base': string;
  'rates': {
    [key: string]: number;
  };
}

export interface IExchangeRateDataState {
  data: IExchangeRateData | null;
  errors: Error | null;
}

export const reduceExchangeRateData = (state: IExchangeRateDataState = initialAppState.exchangeRateData, action: exchangeRateDataTypes): IExchangeRateDataState => {
  switch (action.type) {
    case UPDATE_EXCHANGE_RATE_DATA:
      return {
        data: action.payload,
        errors: null,
      };
    case SET_EXCHANGE_RATE_ERRORS:
      return {
        ...state,
        errors: action.payload
      };

    default:
      return state;
  }
};
