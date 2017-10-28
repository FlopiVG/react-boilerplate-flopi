import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ id, text }) => (
  <div className="item card mt-5">
    <div className="card-body">
      <h1 className="card-title">Item #{id}</h1>
      <p className="card-text">{text}</p>
    </div>
  </div>
);

Item.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default Item;
