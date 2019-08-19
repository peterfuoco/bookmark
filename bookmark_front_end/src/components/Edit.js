import React, { Component } from 'react';
import Axios from 'axios';

class AddBookmark extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.bookmark.title,
      url: this.props.bookmark.url,
      _id: this.props.bookmark._id
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value
    });
  }

  async handleSubmit(event) {
    const baseURL = this.props.baseURL;
    const response = await Axios.put(`${baseURL}/bookmarks/${this.state._id}`, {
      title: this.state.title,
      url: this.state.url
    });
    this.props.handleEditBookmarks(response.data);
    this.props.stopEdit();
  }

  render() {
    return (
      <div>
        <h1> Edit Bookmark</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='title' />
          <input
            type='text'
            id='title'
            name='title'
            onChange={this.handleChange}
            value={this.state.title}
          />
          <label htmlFor='url' />
          <input
            type='text'
            id='url'
            name='url'
            onChange={this.handleChange}
            value={this.state.url}
          />
          <input type='submit' value='Edit Bookmark' />
        </form>
      </div>
    );
  }
}

export default AddBookmark;
