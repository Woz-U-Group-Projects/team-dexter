import React from 'react';
import axios from 'axios';

export default class Feed extends React.Component {
  constructor(props){
    super(props);
    this.state = { posts: [], files: [], selectedFile: null };
    this.postTitle = React.createRef();
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    let url = "http://localhost:8080/api/posts";
    axios.get(url).then(response => this.setState({ posts: response.data }));
  };

  fileSelectedHandler = event => {
    this.setState({ selectedFile: event.target.files[0]})
  }

  addPost = () => {
    let url = "http://localhost:8080/api/posts";
    axios.post(url, { title: this.postTitle.current.value }).then(response => {
      this.getPosts();
      this.postTitle.current.value = "";
    });
  };

  deletePost = (id) => {
    let url = `http://localhost:8080/posts/${id}/delete`;
    axios.delete(url, { postId: this.id }).then(response => {
      console.log(response)
    });
  };

  render() {
    return (
      <section id="main-feed">
        {/* Create user easy post here */}
        <div className="row">
          <div className="posts col-md-9 col-sm-12">
            <h3>This is the posts page</h3>
            {this.state.posts.map(post => (
              <div key={post.id}>
                <h3>{post.title}</h3> 
              </div>
            ))}
          </div>
          <form className="create-post col-md-3 col-sm-12">
            <h3>Create a new post</h3>
            <label>Pattern Title</label>
            <br />
            <input ref={this.postTitle} />
            <br />
            <input type="file" name="imageFile" onChange={this.fileSelectedHandler} />
            <img alt="img-title" />
            <br />
            <button type="submit" value="submit" className="btn btn-primary" onClick={this.addPost}>Create</button>
          </form>
        </div>
      </section>        
    );
  }
}