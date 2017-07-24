import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';

import ListItem from 'components/ListItems';

class App extends Component {
  static propTypes = {
    getData: PropTypes.func,
    list: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.object),
      loading: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }).isRequired,
  }
  static defaultProps = {
    getData: () => null,
  }
  componentDidMount() {
    this.props.getData();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <ListItem {...this.props.list} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
