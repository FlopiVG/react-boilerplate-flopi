import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Wrapper from './wrapper';

class ListItems extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
    loading: PropTypes.bool.isRequired,
    getItem: PropTypes.func,
  }
  static defaultProps = {
    getItem: () => null,
  }
  activeItem = (id) => {
    this.props.getItem(id);
  }
  render() {
    const { data, error, loading } = this.props;
    return (
      <Wrapper>
        {loading && <div className="loading">Loading<span>.</span><span>.</span><span>.</span></div>}
        {error && <div className="error">{error}</div>}
        {!loading && !error && data.map(item =>
          <a key={item.id} onClick={() => this.activeItem(item.id)} role="link" tabIndex={0}>{item.text}</a>)}
      </Wrapper>
    );
  }
}

export default ListItems;
