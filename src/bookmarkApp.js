import React, { Component } from 'react';
import './index.css';
import BookmarkList from './bookmarkList';
import AddButton from './addButton';
import Filter from './filter';

class BookmarkApp extends Component {
  render() {
    return (
      <div className="bookmarkApp">
        <h2>My Bookmarks:</h2>
        <div className="controls">
          <AddButton showForm={this.props.showForm}/>
          <Filter/>
        </div>
        <BookmarkList bookmarks={this.props.bookmarks}/>
      </div>
    );
  }
}

export default BookmarkApp;