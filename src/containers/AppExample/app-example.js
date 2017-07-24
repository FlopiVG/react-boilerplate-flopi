import { connect } from 'react-redux';

import { getData, getItem } from 'actions/example';
import App from 'components/App';

const mapStateToProps = ({ example: { data, loading, error, activeItem } }) => (
  {
    list: { data, loading, error },
    item: activeItem,
  }
);

const mapDispatchToProps = dispatch => (
  {
    getData: () => dispatch(getData()),
    getItem: id => dispatch(getItem(id)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);

