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

  render() {
    return (
      <div className='App'>
        <AddBookmark
          handleAddBookmarks={this.handleAddBookmarks}
          baseURL={baseURL}
        />
        <Show bookmarks={this.state.bookmarks} />
      </div>
    );
  }
}

export default App;
