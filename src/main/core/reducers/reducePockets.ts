import {initialAppState} from '../createStore';
import {ADD_MONEY, pocketsTypes, SUBTRACT_MONEY} from '../actions/pocketsTypes';
import {formatNumberToString} from '../calculation-utils';

export interface IPocket {
  name: string;
  value: string;
  currency: string;
}

export interface IPocketsState {
  [key: string]: IPocket;
}

export const reducePockets = (state: IPocketsState = initialAppState.pockets, action: pocketsTypes): IPocketsState => {
  switch (action.type) {
    case ADD_MONEY:
      return {
        ...state,
        [action.payload.name]: {
          ...action.payload,
          value: formatNumberToString(parseFloat(state[action.payload.name].value) + parseFloat(action.payload.value)),
        },
      };
    case SUBTRACT_MONEY:
      return {
        ...state,
        [action.payload.name]: {
          ...action.payload,
          value: formatNumberToString(parseFloat(state[action.payload.name].value) - parseFloat(action.payload.value)),
        },
      };
    default:
      return state;
  }
};
