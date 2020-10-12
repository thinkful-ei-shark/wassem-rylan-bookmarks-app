import React, { Component } from 'react';
import './index.css';
import Bookmark from './bookmark';

export default class BookmarkList extends Component {
    state = {
        activeSectionIndex: null
    }

    constructor(props) {
        super(props)
        this.handleSetActiveSection = this.handleSetActiveSection.bind(this)
    }

    handleSetActiveSection = (sectionIndex) => {
        (this.state.activeSectionIndex === sectionIndex) ? this.setState({ activeSectionIndex: null }) : this.setState({ activeSectionIndex: sectionIndex });
    }

    render() {
        const bookmarks = this
            .props
            .bookmarks
            .map((bookmark, i) => <Bookmark {...bookmark} 
                                    index={i} 
                                    key={i} 
                                    handleSetActiveSection={this.handleSetActiveSection}
                                    activeSectionIndex={this.state.activeSectionIndex}/>);
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