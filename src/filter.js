import React, { Component } from 'react';
import './index.css';

class Filter extends Component {
  render() {
    return (
      <select className="dd_filter" >
        <option>Filter By</option>
      </select>
    );
  }
}

export default Filter;