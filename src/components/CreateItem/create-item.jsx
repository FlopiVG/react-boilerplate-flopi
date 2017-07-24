import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Wrapper from './wrapper';

class CreateItem extends Component {
  static propTypes = {
    activeCreateMode: PropTypes.func.isRequired,
    createMode: PropTypes.bool,
  }
  static defaultProps = {
    createMode: false,
  }
  activeCreateMode = (active) => {
    this.props.activeCreateMode(active);
  }
  render() {
    const { createMode } = this.props;
    return (
      <Wrapper className="create-item">
        {!createMode && <button onClick={() => this.activeCreateMode(true)}>Create New</button>}
        {createMode && <form>
          <div>
            <label htmlFor="form-text">Text: </label>
            <input id="form-text" />
          </div>
          <button type="submit">Create</button>
          <button type="reset" onClick={() => this.activeCreateMode(false)}>Cancel</button>
        </form>}
      </Wrapper>
    );
  }
}

export default CreateItem;
