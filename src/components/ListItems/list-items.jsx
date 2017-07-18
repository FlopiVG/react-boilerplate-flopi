import React from 'react';
import PropTypes from 'prop-types';

const ListItems = props => (
  <ul>
    {props.data.map(data => <li key={data.id}>{data.text}</li>)}
  </ul>
);

ListItems.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListItems;
