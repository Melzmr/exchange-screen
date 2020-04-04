import {IPocket} from '../reducers/reducePockets';

export const ADD_MONEY = 'add_money';
export const SUBTRACT_MONEY = 'subtract_money';

interface AddMoneyAction {
  type: typeof ADD_MONEY;
  payload: IPocket;
}

interface SubtractMoneyAction {
  type: typeof SUBTRACT_MONEY;
  payload: IPocket;
}

export type pocketsTypes = AddMoneyAction | SubtractMoneyAction;
