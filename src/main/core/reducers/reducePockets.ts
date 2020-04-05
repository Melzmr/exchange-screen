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
  state = {...state};
  switch (action.type) {
    case ADD_MONEY:
      state[action.payload.name].value = formatNumberToString(
          parseFloat(state[action.payload.name].value) + parseFloat(action.payload.value)
      );
      return state;
    case SUBTRACT_MONEY:
      state[action.payload.name].value = formatNumberToString(
          parseFloat(state[action.payload.name].value) - parseFloat(action.payload.value)
      );
      return state;
    default:
      return state;
  }
};
