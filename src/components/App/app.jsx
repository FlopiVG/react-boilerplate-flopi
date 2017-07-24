import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListItem from 'components/ListItems';
import Item from 'components/Item';

class App extends Component {
  static propTypes = {
    getData: PropTypes.func,
    list: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.object),
      loading: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }).isRequired,
    item: PropTypes.oneOfType([
      PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
      }),
      PropTypes.bool,
    ]).isRequired,
    getItem: PropTypes.func.isRequired,
  }
  static defaultProps = {
    getData: () => null,
  }
  componentDidMount() {
    this.props.getData();
  }
  render() {
    const { list, item, getItem } = this.props;
    return (
      <div>
        <ListItem {...list} getItem={getItem} />
        {item && <Item {...item} />}
      </div>
    );
  }
}

export default App;
