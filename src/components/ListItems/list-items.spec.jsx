import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import expect from 'expect';

import ListItems from './list-items';

describe('List Items', () => {
  const component = ReactTestUtils.renderIntoDocument(
    <ListItems data={[{ id: 1, text: 'Data 1' }, { id: 2, text: 'Data 2' }]} error={false} loading={false} />,
  );
  it('renders without problems', () => {
    expect(component).toExist();
  });
});
