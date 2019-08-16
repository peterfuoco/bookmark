import React from 'react';
import axios from 'axios';


class Show extends React.Component {



  render() {
    return (
      <div className='show'>
        <h1>Website List</h1>
        
        {this.props.bookmarks.map(bookmark => {
          return (
            <div key={bookmark._id}>
              <a href={bookmark.url}> {bookmark.title} </a>
              <h2 onClick={() => this.props.deleteBookmark(bookmark._id)}>DELETE</h2>
            </div>
          )
        })}
      </div>
    );
  };
};

export default Show;
