import {initialAppState} from '../createStore';
import {ADD_MONEY, pocketsTypes, SUBTRACT_MONEY} from '../actions/pocketsTypes';
import {formatNumber} from '../calculation-utils';

export interface IPocket {
  name: string;
  value: number;
  currency: string;
}

export interface IPocketsState {
  [key: string]: IPocket;
}

export const reducePockets = (state: IPocketsState = initialAppState.pockets, action: pocketsTypes) => {
  switch (action.type) {
    case ADD_MONEY:
      return {
        ...state,
        [action.payload.name]: {
          ...action.payload,
          value: formatNumber(state[action.payload.name].value + action.payload.value),
        },
      };
    case SUBTRACT_MONEY:
      return {
        ...state,
        [action.payload.name]: {
          ...action.payload,
          value: formatNumber(state[action.payload.name].value - action.payload.value),
        },
      };
    default:
      return state;
  }
};
