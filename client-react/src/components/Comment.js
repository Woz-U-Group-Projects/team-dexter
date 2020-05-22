import React, { Component } from 'react';
import DateStamp from './DateStamp';
import axios from 'axios'
import { connect } from 'react-redux'

//needs controller
class Comments extends Component {
    constructor() {
        super()
        this.state = {
            comments: []
        }
    }

    componentWillMount() {
        axios.get(`/api/comment/get/all/${this.props.post_id}`).then(response => {
            if (+response.data[0] === this.props.post_id) {
                response.data.shift()
                this.setState({
                    comments: response.data
                })
            }
        })
    }

    deleteComment(id) {
        axios.delete(`api/comment/destroy/${id}`).then(response => {

        })
    }


    render() {
        return (
            <div class='col-xs-12 comments-container'>

                {this.state.comments.map(comment => {
                    if (comment.user_id === this.props.user.id) {
                        return (
                            <div class="comment" key={comment.id}>
                                <div class="col-xs-1 comment-profile-img-container"><img class="comment-profile-img" src={comment.profile_img} /></div>
                                <div class="col-xs-11">
                                    <p class="comment-text" ><strong>{comment.first_name} {comment.last_name}</strong> {comment.text_content}</p>
                                </div>
                                <div class="comment-date"><DateStamp date={comment.created_at} /></div>
                                <div class="delete-comment"><a role="button" onClick={() => { this.deleteComment(comment.id) }}><i class="fa fa-times"></i></a></div>
                            </div>)

                    } else {
                        return (
                            <div class="comment" key={comment.id}>
                                <div class="col-xs-1 comment-profile-img-container"><img class="comment-profile-img" src={comment.profile_img} /></div>
                                <div class="col-xs-11">
                                    <p class="comment-text" ><strong>{comment.first_name} {comment.last_name}</strong> {comment.text_content}</p>
                                </div>
                                <div class="comment-date"><DateStamp date={comment.created_at} /></div>

                            </div>

                        )
                    }
                })}

            </div>

        )
    }
}
function mapStateToProps(state) {
    let { user, isAuthenticated, sentRequests, requests, friendIds } = state
    return {
        isAuthenticated,
        user,
        sentRequests,
        requests,
        friendIds
    }
}

export default connect(mapStateToProps)(Comments);