import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

class CreateItem extends Component {
  static propTypes = {
    activeCreateMode: PropTypes.func.isRequired,
    createItem: PropTypes.func,
    createMode: PropTypes.bool,
    handleSubmit: PropTypes.func.isRequired,
  }
  static defaultProps = {
    createMode: false,
    createItem: () => null,
    resetForm: () => null,
  }
  onSubmit = (values) => {
    this.props.createItem(values);
  }
  activeCreateMode = (active) => {
    this.props.activeCreateMode(active);
  }
  render() {
    const { createMode, handleSubmit } = this.props;
    return (
      <div className="create-item mt-5">
        {!createMode && <button className="btn btn-primary" onClick={() => this.activeCreateMode(true)}>Create New</button>}
        {createMode && <form onSubmit={handleSubmit(this.onSubmit)}>
          <div className="form-group col-4">
            <label htmlFor="form-text">Text: </label>
            <Field className="form-control" id="form-text" name="text" component="input" />
          </div>
          <button className="btn btn-primary" type="submit">Create</button>
          <button className="btn btn-secondary" type="reset" onClick={() => this.activeCreateMode(false)}>Cancel</button>
        </form>}
      </div>
    );
  }
}

export default CreateItem;
