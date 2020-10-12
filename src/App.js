import React, { Component } from 'react';
import './App.css';
import AddBookmark from './addBookmark';
import BookmarkApp from './bookmarkApp';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      bookmarks: [],
      showAddForm: false
    };
  }

  componentDidMount() {
    const url = 'https://thinkful-list-api.herokuapp.com/rylan/bookmarks';
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
        //concatenates onto store 
        //let joined = this.state.bookmarks.concat(data);
        this.setState({
          bookmarks: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  handleDelete = (e) => {
    let id = e.target.id;
    const url = `https://thinkful-list-api.herokuapp.com/rylan/bookmarks/${id}`;
    console.log(url);
    
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
            this.componentDidMount();
            return res.json();
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
    this.componentDidMount();
  }

  render() {
    const page = this.state.showAddForm
          ? <AddBookmark 
                 showForm={show => this.setShowAddForm(show)} 
                 handleAdd={bookmark => this.addBookmark(bookmark)}/>
          : <BookmarkApp bookmarks={this.state.bookmarks} 
                         showForm={show => this.setShowAddForm(show)} 
                         handleDelete={e => this.handleDelete(e)}/>; 

    return (
      <div className="App">
        { page }
      </div>
    );
  }
}

export default App;