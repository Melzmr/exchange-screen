import {IPocket} from './reducers/reducePockets';
import {IRatesData} from './reducers/reduceExchangeRateData';

export const formatNumberToString = (n: number, precise: number = 2): string => {
  return n.toFixed(precise);
};

export const getCrossRate = (pocket1: IPocket, pocket2: IPocket, rates: IRatesData, base: string): string => {
  return formatNumberToString(
      pocket1.name === base
          ? rates[pocket2.name]
          : rates[pocket2.name] / rates[pocket1.name],
      4
  )
};
