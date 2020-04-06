import React from 'react';
import {render} from '@testing-library/react';
import {Header} from '../../main/components/header/Header';
import {shallow} from 'enzyme';

describe('Header', () => {
  let comp: React.ReactElement;
  let fn: jest.Mock;

  beforeEach(() => {
    fn = jest.fn();
    comp = (
        <Header
            crossRate={'0.12'}
            selectedTop={{
              name: 'USD',
              value: '100',
              currency: '$',
            }}
            selectedBottom={{
              name: 'EUR',
              value: '50',
              currency: '€',
            }}
            disabled={false}
            exchangeOnClick={fn}
        />
    );
  });

  it('renders Header component', () => {
    const wrapper = shallow(comp);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Header component with the same pockets', () => {
    const wrapper = shallow(
        <Header
            crossRate={'0.12'}
            selectedTop={{
              name: 'USD',
              value: '100',
              currency: '$',
            }}
            selectedBottom={{
              name: 'USD',
              value: '100',
              currency: '$',
            }}
            disabled={false}
            exchangeOnClick={fn}
        />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders exchange button in header', () => {
    const {getByText} = render(comp);
    const exchangeEl = getByText('Exchange');
    expect(exchangeEl).toBeInTheDocument();
  });

  it('renders cancel button in header', () => {
    const {getByText} = render(comp);
    const cancelEl = getByText('Cancel');
    expect(cancelEl).toBeInTheDocument();
  });

  it('renders crossRate in header', () => {
    const {getByText} = render(comp);
    const crossRate = getByText(/0.12/);
    expect(crossRate).toBeInTheDocument();
  });

  it(`it doesn't render cross rate if pockets are the same`, () => {
    const {queryByText} = render(
        <Header
            crossRate={'0.12'}
            selectedTop={{
              name: 'USD',
              value: '100',
              currency: '$',
            }}
            selectedBottom={{
              name: 'USD',
              value: '100',
              currency: '$',
            }}
            disabled={false}
            exchangeOnClick={fn}
        />,
    );
    const crossRate = queryByText(/0.12/);
    expect(crossRate).toBe(null);
  });

  it('calls exchangeOnClick', async () => {
    const wrapper = render(comp);
    const btn = await wrapper.findByText('Exchange');
    btn.click();
    expect(fn).toBeCalled();
  });

});


