import React from 'react';

export default class Posts extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.posts}</div>
        <button onClick={this.props.onGetPosts}>Get Values!</button>
      </div>
    );
  }
}