import {render} from '@testing-library/react';
import {shallow} from 'enzyme';
import {ErroredPage} from '../../main/pages/errored-page/ErroredPage';
import React from 'react';

describe('ErroredPage', () => {
  let comp: React.ReactElement;

  beforeEach(() => {
    comp = (
        <ErroredPage>
          {'Errored'}
        </ErroredPage>
    );
  });

  it('renders ErroredPage component', () => {
    const wrapper = shallow(comp);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders children', () => {
    const {getByText} = render(comp);
    const el = getByText('Errored');
    expect(el).toBeInTheDocument();
  });

});


