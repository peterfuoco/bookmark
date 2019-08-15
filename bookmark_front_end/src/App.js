import React, { Component } from 'react';
import './App.css';
import AddBookmark from './components/AddBookmark';

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
  }
  render() {
    return (
      <div className='App'>
        <AddBookmark />
      </div>
    );
  }
}

export default App;
