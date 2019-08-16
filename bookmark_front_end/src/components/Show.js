import React from 'react';

class Show extends React.Component {
  render() {
    return (
      <div className='show'>
        <h1>Website List</h1>

        {this.props.bookmarks.map(bookmark => {
          return (
            <div key={bookmark._id}>
              <h3> {bookmark.title}</h3>
              <h3> {bookmark.url} </h3>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Show;
