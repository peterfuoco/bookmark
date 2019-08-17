import React, { Component } from 'react';
import './App.css';
import AddBookmark from './components/AddBookmark';
import axios from 'axios';
import Show from './components/Show';

let baseURL = process.env.REACT_APP_BASEURL;

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003';
} else {
  baseURL = 'https://fathomless-sierra-68956.herokuapp.com';
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: []
    };
    this.handleAddBookmarks = this.handleAddBookmarks.bind(this);
    this.deleteBookmark = this.deleteBookmark.bind(this);
    this.handleEditBookmarks = this.handleAddBookmarks.bind(this);
  }

  async getBookmarks() {
    const response = await axios(`${baseURL}/bookmarks`);
    const data = response.data;
    this.setState({
      bookmarks: data
    });
  }

  componentDidMount() {
    this.getBookmarks();
  }

  handleAddBookmarks(bookmark) {
    const copyBookmarks = [...this.state.bookmarks];
    copyBookmarks.unshift(bookmark);
    this.setState({
      bookmarks: copyBookmarks
    });
  }

  async deleteBookmark(id) {
    await axios.delete(`${baseURL}/bookmarks/${id}`);
    console.log('click');
    const filteredBookmarks = this.state.bookmarks.filter(bookmark => {
      return bookmark._id !== id;
    });
    console.log('filtered', filteredBookmarks);

    this.setState({
      bookmarks: filteredBookmarks
    });
  }
  async handleEditBookmarks(selectedBookmark) {
    await axios.put(`${baseURL}/bookmarks/${selectedBookmark._id}`);
    const updatedBookmarks = this.state.bookmarks.map(bookmark => {
      if (bookmark._id === selectedBookmark._id) {
        bookmark.title = selectedBookmark.title;
        bookmark.url = selectedBookmark.url;
        return bookmark;
      } else {
        return bookmark;
      }
    });
    this.setState({
      bookmarks: updatedBookmarks
    });
  }

  render() {
    return (
      <div className='App'>
        <AddBookmark
          handleAddBookmarks={this.handleAddBookmarks}
          baseURL={baseURL}
        />
        <Show
          bookmarks={this.state.bookmarks}
          baseURL={baseURL}
          deleteBookmark={this.deleteBookmark}
          handleEditBookmarks={this.handleEditBookmarks}
        />
      </div>
    );
  }
}

export default App;
