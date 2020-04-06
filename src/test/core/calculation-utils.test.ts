import {formatNumberToString, getCrossRate} from '../../main/core/calculation-utils';

describe('formatNumberToString', () => {

  it('formats number to string with precise of 6', () => {
    const number = 0.121313131313;
    expect(formatNumberToString(number, 6)).toEqual('0.121313');
  });

  it('formats integer to float', () => {
    const number = 0;
    expect(formatNumberToString(number)).toEqual('0.00');
  });

});

describe('getCrossRate', () => {
  const pocket1 = {
    name: 'USD',
    value: '10.00',
    currency: '$',
  };
  const pocket2 = {
    name: 'EUR',
    value: '15.00',
    currency: '€',
  };
  const pocket3 = {
    name: 'GBP',
    value: '20.00',
    currency: '£',
  };
  const rates = {
    'USD': 1,
    'EUR': 300,
    'GBP': 500,
  };
  const base = 'USD';

  it('gets correct crossRate for USD / EUR', () => {
    expect(getCrossRate(pocket1, pocket2, rates, base)).toEqual('300.0000');
  });

  it('gets correct crossRate for GBP / EUR', () => {
    expect(getCrossRate(pocket3, pocket2, rates, base)).toEqual('0.6000');
  });

  it('gets correct crossRate for EUR / USD', () => {
    expect(getCrossRate(pocket2, pocket1, rates, base)).toEqual('0.0033');
  });

  it('gets correct crossRate for USD / USD', () => {
    expect(getCrossRate(pocket1, pocket1, rates, base)).toEqual('1.0000');
  });

});
