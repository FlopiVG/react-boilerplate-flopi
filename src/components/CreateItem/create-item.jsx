import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Wrapper from './wrapper';

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
  renderField = field => (
    <input type="text" {...field.input} />
  )
  render() {
    const { createMode, handleSubmit } = this.props;
    return (
      <Wrapper className="create-item">
        {!createMode && <button onClick={() => this.activeCreateMode(true)}>Create New</button>}
        {createMode && <form onSubmit={handleSubmit(this.onSubmit)}>
          <div>
            <label htmlFor="form-text">Text: </label>
            <Field id="form-text" name="text" component={this.renderField} />
          </div>
          <button type="submit">Create</button>
          <button type="reset" onClick={() => this.activeCreateMode(false)}>Cancel</button>
        </form>}
      </Wrapper>
    );
  }
}

export default CreateItem;
