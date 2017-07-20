import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
  static propTypes = {
    getItem: PropTypes.func,
    item: PropTypes.oneOfType([
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
      }),
      PropTypes.bool,
    ]).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }).isRequired,
    }).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  }
  static defaultProps = {
    getItem: () => null,
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getItem(id, () => this.props.history.push('/'));
  }
  componentDidUpdate() {
    const { id } = this.props.match.params;
    this.props.getItem(id);
  }
  render() {
    return (
      <div>
        <h1>Item #{this.props.item.id}</h1>
        <p>{this.props.item.text}</p>
      </div>
    );
  }
}

export default Item;
