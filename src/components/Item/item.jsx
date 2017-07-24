import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ id, text }) => (
  <div>
    <h1>Item #{id}</h1>
    <p>{text}</p>
  </div>
);

Item.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default Item;
