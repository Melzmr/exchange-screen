import React from 'react';
import {render} from '@testing-library/react';
import {shallow} from 'enzyme';
import {InputBlock} from '../../main/components/input-block/InputBlock';

describe('InputBlock', () => {
  let comp: React.ReactElement;
  let fn;

  beforeEach(() => {
    fn = jest.fn();
    comp = (
        <InputBlock
            amount={'100'}
            onAmountChange={fn}
            amountPrefix={'+'}
            className={'foo'}
            pocket={{
              name: 'USD',
              value: '100',
              currency: '$',
            }}
            bottomLabel={(
                <span>
                  TestLabel
                </span>
            )}
        />
    );
  });

  it('renders InputBlock component', () => {
    const wrapper = shallow(comp);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders bottom label', () => {
    const {getByText} = render(comp);
    const el = getByText('TestLabel');
    expect(el).toBeInTheDocument();
  });

  it('renders currency of current pocket', () => {
    const {getByText} = render(comp);
    const el = getByText('USD');
    expect(el).toBeInTheDocument();
  });

  it('renders prefix', () => {
    const {getByText} = render(comp);
    const el = getByText('+');
    expect(el).toBeInTheDocument();
  });

  it('adds classname to container', () => {
    const {container} = render(comp);
    expect((container.firstChild as any).classList.contains('foo')).toBeTruthy();
  });

});


