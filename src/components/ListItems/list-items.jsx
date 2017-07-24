import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Wrapper from './wrapper';

const ListItems = (props) => {
  const { data, error, loading } = props;
  return (
    <Wrapper>
      {loading && <div className="loading">Loading<span>.</span><span>.</span><span>.</span></div>}
      {error && <div className="error">{error}</div>}
      {!loading && !error && <ul>
        {data.map(item => <Link to={`/item/${item.id}`} key={item.id}><li>{item.text}</li></Link>)}
      </ul>}
    </Wrapper>
  );
};

ListItems.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default ListItems;
