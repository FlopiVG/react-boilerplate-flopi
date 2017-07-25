import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { getData, getItem, activeCreateMode } from 'actions/example';
import App from 'components/App';

const mapStateToProps =
({ example: { data, loading, error, activeItem, createMode } }, { handleSubmit }) => (
  {
    list: { data, loading, error },
    item: activeItem,
    create: { createMode, handleSubmit },
  }
);

const mapDispatchToProps = dispatch => (
  {
    getData: () => dispatch(getData()),
    getItem: id => dispatch(getItem(id)),
    activeCreateMode: active => dispatch(activeCreateMode(active)),
  }
);
export default reduxForm({
  form: 'createNew',
})(
  connect(mapStateToProps, mapDispatchToProps)(App),
);

