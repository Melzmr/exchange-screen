import {initialAppState} from '../../main/core/createStore';
import {IPocket, IPocketsState, reducePockets} from '../../main/core/reducers/reducePockets';
import {ADD_MONEY, pocketsTypes, SUBTRACT_MONEY} from '../../main/core/actions/pocketsTypes';

describe('reducePockets', () => {
  let initialPocketState: IPocketsState;
  let newPocket: IPocket;

  beforeEach(() => {
    initialPocketState = {
      'USD': {
        name: 'USD',
        value: '50.00',
        currency: '$',
      },
    };

    newPocket = {
      name: 'USD',
      value: '23.45',
      currency: '$',
    }
  });

  it('sets initial state', () => {
    expect(reducePockets(undefined, {} as pocketsTypes)).toEqual(initialAppState.pockets);
  });

  it('adds money', () => {
    expect(reducePockets(initialPocketState, {type: ADD_MONEY, payload: newPocket})).toEqual(
        {
          'USD': {
            name: 'USD',
            value: '73.45',
            currency: '$',
          },
        },
    );
  });

  it('subtracts money', () => {
    expect(reducePockets(initialPocketState, {type: SUBTRACT_MONEY, payload: newPocket})).toEqual(
        {
          'USD': {
            name: 'USD',
            value: '26.55',
            currency: '$',
          },
        },
    );
  });

});
