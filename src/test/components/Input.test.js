import React from 'react';
import {shallow} from 'enzyme';
import {Input} from '../../main/components/input/Input';

describe('Input', () => {
  let comp;
  let fn;

  beforeEach(() => {
    fn = jest.fn();
    comp = (
        <Input
            onChange={fn}
            style={{}}
            value={'100.00'}
        />
    );
  });

  it('renders Input component', () => {
    const wrapper = shallow(comp);
    expect(wrapper).toMatchSnapshot();
  });

});


