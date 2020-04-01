import {useFetchApi} from '../../core/CustomHooks';

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

export const useExchangeRateApi = () => {
  return useFetchApi<IExchangeRateData | null>({
    request: 'https://api.exchangerate-api.com/v5/latest',
    initialState: null,
  });
};

const data = {
  'documentation': 'https://www.exchangerate-api.com/docs/free',
  'terms_of_use': 'https://www.exchangerate-api.com/terms',
  'time_zone': 'UTC',
  'time_last_update': 1585699599,
  'time_next_update': 1585787189,
  'time_eol': 0,
  'base': 'USD',
  'rates': {
    'USD': 1,
    'AED': 3.67,
    'ARS': 64.41,
    'AUD': 1.63,
    'BGN': 1.78,
    'BRL': 5.19,
    'BSD': 1,
    'CAD': 1.42,
    'CHF': 0.964,
    'CLP': 852.83,
    'CNY': 7.1,
    'COP': 4030,
    'CZK': 24.89,
    'DKK': 6.8,
    'DOP': 53.7,
    'EGP': 15.72,
    'EUR': 0.91,
    'FJD': 2.28,
    'GBP': 0.808,
    'GTQ': 7.71,
    'HKD': 7.75,
    'HRK': 6.95,
    'HUF': 327.51,
    'IDR': 16419.5,
    'ILS': 3.56,
    'INR': 75.55,
    'ISK': 141.61,
    'JPY': 108.14,
    'KRW': 1223.23,
    'KZT': 447.78,
    'MXN': 23.88,
    'MYR': 4.32,
    'NOK': 10.49,
    'NZD': 1.68,
    'PAB': 1,
    'PEN': 3.44,
    'PHP': 50.97,
    'PKR': 164.97,
    'PLN': 4.14,
    'PYG': 6510,
    'RON': 4.4,
    'RUB': 78.66,
    'SAR': 3.76,
    'SEK': 10.03,
    'SGD': 1.43,
    'THB': 32.76,
    'TRY': 6.59,
    'TWD': 30.26,
    'UAH': 27.69,
    'UYU': 43.6,
    'ZAR': 17.9
  }
};
