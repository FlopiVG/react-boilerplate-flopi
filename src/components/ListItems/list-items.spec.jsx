import React from 'react';
import { shallow } from 'enzyme';
import ListItems from './list-items';

const setup = (propsOverrides) => {
  const props = Object.assign({
    data: [{ id: 1, text: 'Data1' }],
    error: false,
    loading: false,
  }, propsOverrides);

  const wrapper = shallow(<ListItems {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('List Items', () => {
  it('renders without problems', () => {
    expect(setup()).toBeDefined();
  });
});
