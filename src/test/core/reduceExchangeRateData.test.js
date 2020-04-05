import {reduceExchangeRateData} from '../../main/core/reducers/reduceExchangeRateData';
import {initialAppState} from '../../main/core/createStore';
import {SET_EXCHANGE_RATE_ERRORS, UPDATE_EXCHANGE_RATE_DATA} from '../../main/core/actions/exchangeRateDataTypes';

describe('reduceExchangeRateData', () => {
  it('sets initial state', () => {
    expect(reduceExchangeRateData(undefined, {})).toEqual(initialAppState.exchangeRateData);
  });

  it('updates state', () => {
    expect(reduceExchangeRateData(undefined, {type: UPDATE_EXCHANGE_RATE_DATA, payload: 'foo'})).toEqual({
      data: 'foo',
      errors: null,
    });
  });

  it('sets errors', () => {
    expect(reduceExchangeRateData({}, {type: SET_EXCHANGE_RATE_ERRORS, payload: 'foo'})).toEqual({
      errors: 'foo',
    });
  });

});
