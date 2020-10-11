import React, { Component } from 'react';
import './index.css';
import Bookmark from './bookmark';

class BookmarkList extends Component {
  render() {
    const bookmarks = this
          .props
          .bookmarks
          .map((bookmark, i) => <Bookmark { ...bookmark } index={i} key={i}/>);
    return (
      <div className="bookmarkList">
        {bookmarks}
      </div>
    );
  }
}

BookmarkList.defaultProps = {
  bookmarks: []
};

export default BookmarkList;