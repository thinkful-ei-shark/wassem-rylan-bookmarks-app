import React, { Component } from 'react';
import './App.css';
import AddBookmark from './addBookmark';
import BookmarkApp from './bookmarkApp';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [{ 'title': 'Google', 'url': 'http://google.com', 'desc': 'a search engine', 'rating': 1 },
      { 'title': 'Nexflix', 'url': 'https://www.netflix.com/', 'desc': 'movie website', 'rating': 2 },
      { 'title': 'Facebook', 'url': 'https://www.facebook.com/', 'desc': 'social networking', 'rating': 3 },
      { 'title': 'Github', 'url': 'https://github.com/', 'desc': 'code repository', 'rating': 4 },
      { 'title': 'MDN', 'url': 'https://developer.mozilla.org/', 'desc': 'web tech docs', 'rating': 5 }],
      showAddForm: false
    };
  }

  componentDidMount() {
    const url = 'https://thinkful-list-api.herokuapp.com/rylan/bookmarks';
    //First populate list with defaults:

    const options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    };

    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        let joined = this.state.bookmarks.concat(data);
        this.setState({
          bookmarks: joined,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  setShowAddForm(show) {
    this.setState({
      showAddForm: show
    });
  }

  addBookmark(bookmark) {
    this.setState({
      bookmarks: [...this.state.bookmarks, bookmark],
      showAddForm: false
    });
  }

  render() {
    const page = this.state.showAddForm
          ? <AddBookmark 
                 showForm={show => this.setShowAddForm(show)} 
                 handleAdd={bookmark => this.addBookmark(bookmark)}/>
          : <BookmarkApp bookmarks={this.state.bookmarks} showForm={show => this.setShowAddForm(show)}/>; 

    return (
      <div className="App">
        { page }
      </div>
    );
  }
}

export default App;