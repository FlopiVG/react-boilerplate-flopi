import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItems extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
    loading: PropTypes.bool.isRequired,
    getData: PropTypes.func.isRequired,
  }
  componentDidMount() {
    this.props.getData();
  }
  render() {
    const { data, error, loading } = this.props;
    return (
      <div>
        {loading && 'Loading...'}
        {error}
        {!loading && !error && data.map(item => <li key={item.id}>{item.text}</li>)}
      </div>
    );
  }
}

export default ListItems;
