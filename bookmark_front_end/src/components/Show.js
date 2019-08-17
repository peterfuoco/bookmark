import React from 'react';
import Edit from './Edit';

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      currentEdit: {}
    };
    this.startEdit = this.startEdit.bind(this);
    this.stopEdit = this.stopEdit.bind(this);
  }

  startEdit(bookmark) {
    this.setState({
      edit: true,
      currentEdit: bookmark
    });
    console.log(this.state.currentEdit);
  }
  stopEdit() {
    this.setState({
      edit: false
    });
  }
  render() {
    return (
      <div className='show'>
        <h1>Website List</h1>
        {this.state.edit ? (
          <Edit
            bookmark={this.state.currentEdit}
            baseURL={this.props.baseURL}
            handleEditBookmarks={this.props.handleEditBookmarks}
            stopEdit={this.stopEdit}
          />
        ) : null}
        {this.props.bookmarks.map(bookmark => {
          return (
            <div key={bookmark._id}>
              <a href={bookmark.url}> {bookmark.title} </a>
              <h2 onClick={() => this.props.deleteBookmark(bookmark._id)}>
                DELETE
              </h2>
              <h3
                onClick={() => {
                  this.startEdit(bookmark);
                }}
              >
                Edit
              </h3>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Show;
