import React, { Component } from 'react';
import './index.css';
import BookmarkList from './bookmarkList';
import AddButton from './addButton';
import Filter from './filter';

export default class BookmarkApp extends Component {
    state = {
        selectValue: 0
    }

    constructor(props) {
        super(props);
        this.onSelectChange = this.onSelectChange.bind(this);
    }

    onSelectChange = e => {
        this.setState({ selectValue: e.target.value });
        console.log(e.target.value);
    }

    render() {
        return (
            <div className="bookmarkApp">
                <h2>My Bookmarks:</h2>
                <div className="controls">
                    <AddButton showForm={this.props.showForm} />
                    <Filter onSelectChange={this.onSelectChange} />
                </div>
                <BookmarkList bookmarks={this.props.bookmarks} 
                              selectValue={this.state.selectValue}
                              handleDelete={this.props.handleDelete}/>
            </div>
        );
    }
}