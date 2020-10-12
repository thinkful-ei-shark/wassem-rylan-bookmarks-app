import React, { Component } from 'react';
import './index.css';
import BookmarkList from './bookmarkList';
import AddButton from './addButton';
import Filter from './filter';

class BookmarkApp extends Component {
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

    handleDelete(e) {
        e.preventDefault();
        const id = e.currrentTarget.value;
        const url = `https://thinkful-list-api.herokuapp.com/rylan/bookmarks/${id}`;
        const options = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            }
        };

        fetch(url, options)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Something went wrong, please try again later');
                }
                return res.json();
            })
            .catch(err => {
                this.setState({
                    error: err.message
                });
            });
    }

    render() {
        return (
            <div className="bookmarkApp">
                <h2>My Bookmarks:</h2>
                <div className="controls">
                    <AddButton showForm={this.props.showForm} />
                    <Filter onSelectChange={this.onSelectChange} />
                </div>
                <BookmarkList bookmarks={this.props.bookmarks} selectValue={this.state.selectValue}/>
            </div>
        );
    }
}

export default BookmarkApp;