import React, {Component} from 'react';
import './App.css';
import AddBookmark from './components/AddBookmark';


class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      bookmarks: []
    }
  }
  render () {
    return (
      <div className="App">
      <AddBookmark />
      </div>
    );

  }
}

export default App;
