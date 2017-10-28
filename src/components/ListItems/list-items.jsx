import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItems extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    activeItemId: PropTypes.number,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
    loading: PropTypes.bool.isRequired,
    getItem: PropTypes.func,
  }
  static defaultProps = {
    getItem: () => null,
    activeItemId: null,
  }
  activeItem = (id) => {
    this.props.getItem(id);
  }
  render() {
    const { data, error, loading, activeItemId } = this.props;

    return (
      <div className="list-group mt-5">
        {loading && <div className="loading">Loading<span>.</span><span>.</span><span>.</span></div>}
        {error && <div className="error">{error}</div>}
        {!loading && !error && data.map(item => (
          <a
            key={item.id}
            onClick={() => this.activeItem(item.id)}
            role="link"
            tabIndex={0}
            className={`list-group-item ${activeItemId === item.id ? 'active' : ''}`}
          >
            {item.text}
          </a>))}
      </div>
    );
  }
}

export default ListItems;
