import { reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';

import { activeCreateMode, createItem } from 'actions/example';
import CreateItem from 'components/CreateItem';

const mapStateToProps = ({ example: { createMode } }) => ({ createMode });

const mapDispatchToProps = dispatch => (
  {
    activeCreateMode: active => dispatch(activeCreateMode(active)),
    createItem: values => dispatch(createItem(values)),
  }
);

const validate = (values) => {
  const errors = {};

  if (!values.text) errors.text = 'Enter some text';

  return errors;
};

const afterSubmit = (result, dispatch) => {
  dispatch(reset('createNewExample'));
};

export default reduxForm({
  form: 'createNewExample',
  validate,
  onSubmitSuccess: afterSubmit,
})(
  connect(mapStateToProps, mapDispatchToProps)(CreateItem),
);
