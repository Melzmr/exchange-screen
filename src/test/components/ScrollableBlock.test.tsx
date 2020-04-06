import React from 'react';
import {shallow} from 'enzyme';
import {ScrollableBlock} from '../../main/components/scroll/ScrollableBlock';

describe('ScrollableBlock', () => {
  let comp: React.ReactElement;

  beforeEach(() => {
    comp = <ScrollableBlock/>;
  });

  it('renders ScrollableBlock component', () => {
    const wrapper = shallow(comp);
    expect(wrapper).toMatchSnapshot();
  });

});


