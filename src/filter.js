import React, { Component } from 'react';
import './index.css';

export default class Filter extends Component {
  state = {
    value: null
  }

  render() {
    return (
      <select className="dd_filter" onChange={this.props.onSelectChange}>
        <option value="0">Filter By</option>
        <option value="5">5 stars</option>
        <option value="4">4 stars</option>          
        <option value="3">3 stars</option>                  
        <option value="2">2 stars</option>  
        <option value="1">1 star</option>
      </select>
    );
  }
} 