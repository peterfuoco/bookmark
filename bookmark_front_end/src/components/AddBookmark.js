import React, { Component } from 'react';
import Axios from 'axios';

class AddBookmark extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      url: ''
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
    event.preventDefault();
    const baseURL = this.props.baseURL;
    const response = await Axios.post(`${baseURL}/bookmarks`, {
      title: this.state.title,
      url: this.state.url
    });
    this.setState({
      title: '',
      url: ''
    });
    this.props.handleAddBookmarks(response.data);
  }

  render() {
    return (
      <div className='addbookmark'>
        <div className='header'>
          <h1> Bookmark App</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='title' />
          <input
            type='text'
            id='title'
            name='title'
            onChange={this.handleChange}
            value={this.state.title}
            placeholder='Website Title'
          />
          <label htmlFor='url' />
          <input
            type='text'
            id='url'
            name='url'
            onChange={this.handleChange}
            value={this.state.url}
            placeholder='https://'
          />
          <input type='submit' value='Add Bookmark' />
        </form>
      </div>
    );
  }
}

export default AddBookmark;
