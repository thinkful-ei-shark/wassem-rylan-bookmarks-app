import React, { Component } from 'react';
import './index.css';

class AddButton extends Component {
  render() {
    return (
      <div className="add_button" onClick={e => this.props.showForm(true)}>
        &#43; New
      </div>
    );
  }
}

export default AddButton;