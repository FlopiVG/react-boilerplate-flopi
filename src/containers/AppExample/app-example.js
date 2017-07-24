import { connect } from 'react-redux';

import { getData, getItem, activeCreateMode } from 'actions/example';
import App from 'components/App';

const mapStateToProps = ({ example: { data, loading, error, activeItem, createMode } }) => (
  {
    list: { data, loading, error },
    item: activeItem,
    createMode,
  }
);

const mapDispatchToProps = dispatch => (
  {
    getData: () => dispatch(getData()),
    getItem: id => dispatch(getItem(id)),
    activeCreateMode: active => dispatch(activeCreateMode(active)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);

