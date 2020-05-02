import React, { Component } from 'react';
import PostForm from './PostForm';

class User extends Component {

    render() {
        return (
            <div>
                <div>
                    <PostForm viewedUser={this.props.viewedUser.id} user_id={this.props.user_id}/>
                </div>
                <div>{this.props.displayPosts}</div>
            </div>
        )
    }
}

export default User;
