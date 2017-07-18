import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItems extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    getData: PropTypes.func.isRequired,
  }
  componentDidMount() {
    this.props.getData();
  }
  render() {
    const { data } = this.props;
    return (
      <div>
        {data.length > 0 && data.map(item => <li key={item.id}>{item.text}</li>)}
      </div>
    );
  }
}

export default ListItems;
