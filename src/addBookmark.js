import React, { Component } from  'react';
import './index.css';

class AddBookmark extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      url: "",
      desc: "",
      rating: 1,
      id: ""
    };
  }

  titleChanged(title) {
    this.setState({
      title
    });
  }

  urlChanged(url) {
    this.setState({
      url
    });
  }

  descriptionChanged(desc) {
    this.setState({
      desc
    });
  }

  ratingChanged(rating) {
    this.setState({
      rating
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const bookmark = (({title, url, desc, rating, id}) => ({title, url, desc, rating, id}))(this.state);
    const url ='https://thinkful-list-api.herokuapp.com/rylan/bookmarks';
    const options = {
      method: 'POST',
      body: JSON.stringify(bookmark),
      headers: {
        "Content-Type": "application/json",
      }
    };

    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return res.json();
      })
      .then(data => {
        this.setState({
          title: "",
          url: "",
          description: "",
          rating: 1,
          id: ""
        });
        this.props.handleAdd(bookmark);
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  render() {
    const error = this.state.error 
          ? <div className="error">{this.state.error}</div>
          : "";

    return (
      <div className="addbookmark">
        <h2>Add Bookmark</h2>
        { error }
        <form className="addbookmark__form" onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="title">Title:</label>
          <input 
            type="text" 
            name="title"
            required="true" 
            id="title" 
            placeholder="Title"
            value={this.state.title}
            onChange={e => this.titleChanged(e.target.value)}/>
          <label htmlFor="url">Url:</label>  
          <input 
            type="url" 
            name="url" 
            id="url" 
            placeholder="url"
            value={this.state.url}
            onChange={e => this.urlChanged(e.target.value)}/>
          <label htmlFor="description">Description:</label>  
          <textarea
            required="true" 
            name="description" 
            id="description" 
            placeholder="description"
            value={this.state.desc}
            onChange={e => this.descriptionChanged(e.target.value)}/>
          <label htmlFor="rating">Rating: </label>
          <input
            required="true" 
            type="number" 
            name="rating" 
            id="rating" 
            min="1"
            max="5"
            value={this.state.rating}
            onChange={e => this.ratingChanged(e.target.value)}/>

          <div className="addbookmark__buttons">
            <button onClick={e => this.props.showForm(false)}>Cancel</button>
            <button type="submit" >Save</button>
          </div>  
        </form>
      </div>
    );
  }
}

export default AddBookmark;
