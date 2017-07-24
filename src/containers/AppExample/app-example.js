import { connect } from 'react-redux';

import { getData } from 'actions/example';
import App from 'components/App';

const mapStateToProps = ({ example: { data, loading, error } }) => (
  {
    list: { data, loading, error },
  }
);

const mapDispatchToProps = dispatch => (
  { getData: dispatch(getData()) }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);

