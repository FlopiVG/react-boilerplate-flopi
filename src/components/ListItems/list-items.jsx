import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Wrapper from './wrapper';

class ListItems extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
    loading: PropTypes.bool.isRequired,
    getData: PropTypes.func,
  }
  static defaultProps = {
    getData: () => null,
  }
  componentDidMount() {
    this.props.getData();
  }
  render() {
    const { data, error, loading } = this.props;
    return (
      <Wrapper>
        {loading && <div className="loading">Loading<span>.</span><span>.</span><span>.</span></div>}
        {error && <div className="error">{error}</div>}
        {!loading && !error && <ul>
          {data.map(item => <li key={item.id}>{item.text}</li>)}
        </ul>}
      </Wrapper>
    );
  }
}

export default ListItems;
