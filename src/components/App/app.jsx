import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListItem from 'components/ListItems';
import Item from 'components/Item';
import CreateItem from 'containers/CreateExample';
import Wrapper from './wrapper';

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
    activeCreateMode: () => null,
    createMode: false,
  }
  componentDidMount() {
    this.props.getData();
  }
  render() {
    const { list, item, getItem } = this.props;
    return (
      <div>
        <Wrapper>
          <ListItem {...list} getItem={getItem} />
          {item && <Item {...item} />}
        </Wrapper>
        <CreateItem />
      </div>
    );
  }
}

export default App;
