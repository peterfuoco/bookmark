import React from 'react';

class Show extends React.Component {
  render() {
    return (
      <div className='show'>
        <h1>Website List</h1>
        {this.props.bookmarks.map(bookmark => {
          return (
            <div key={bookmark._id}>
              <a href={bookmark.url}> {bookmark.title} </a>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Show;
