import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './wrapper';

const Item = ({ id, text }) => (
  <Wrapper className="item">
    <h1>Item #{id}</h1>
    <p>{text}</p>
  </Wrapper>
);

Item.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default Item;
