import {combineReducers, createStore, Store} from 'redux';
import {IPocketsState, reducePockets} from './reducers/reducePockets';
import {IExchangeRateDataState, reduceExchangeRateData} from './reducers/reduceExchangeRateData';
import {pocketsTypes} from './actions/pocketsTypes';
import {exchangeRateDataTypes} from './actions/exchangeRateDataTypes';
import {MockRateData} from '../pages/exchange-page/MockRateData';

export interface IAppState {
  pockets: IPocketsState;
  exchangeRateData: IExchangeRateDataState;
}

export const initialAppState: IAppState = {
  pockets: {
    'USD': {
      name: 'USD',
      value: '100.00',
      currency: '$',
    },
    'GBP': {
      name: 'GBP',
      value: '50.00',
      currency: '£',
    },
    'EUR': {
      name: 'EUR',
      value: '20.00',
      currency: '€',
    }
  },
  // TODO: Data should be null here.
  exchangeRateData: {
    data: MockRateData,
    errors: null,
  },
};

export const store: Store<IAppState, pocketsTypes | exchangeRateDataTypes> = createStore(
    combineReducers({
      pockets: reducePockets,
      exchangeRateData: reduceExchangeRateData,
    }),
    initialAppState);
