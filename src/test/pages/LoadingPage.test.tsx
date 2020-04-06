import React from 'react';
import {render} from '@testing-library/react';
import {shallow} from 'enzyme';
import {ErroredPage} from '../../main/pages/errored-page/ErroredPage';

describe('LoadingPage', () => {
  let comp: React.ReactElement;

  beforeEach(() => {
    comp = (
        <ErroredPage>
          {'Loading'}
        </ErroredPage>
    );
  });

  it('renders LoadingPage component', () => {
    const wrapper = shallow(comp);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders children', () => {
    const {getByText} = render(comp);
    const el = getByText('Loading');
    expect(el).toBeInTheDocument();
  });

});


