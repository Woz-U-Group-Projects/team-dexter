import React from "react";
import axios from "axios";
//import '../task.min.css'
class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
    this.postName = React.createRef();
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    // Java Spring Boot uses port 8080
    //let url = "http://localhost:8080/tasks";

    // C# dotnetcore uses port 5000
    //let url = "http://localhost:5000/projects";

    // Express uses port 3001 (react uses 3000)
    let url = "http://localhost:8080/posts";
    axios.get(url).then(response => this.setState({ posts: response.data }));
  };

  addPost = () => {
    let url = "http://localhost:8080/posts";
    axios.post(url, { postMessage: this.postName.current.value }).then(response => {
      // refresh the data
      this.getData();
      // empty the input
      this.postName.current.value = "";
    });
  };

  // updatePost = (id) => {
  //   let url = "http://localhost:8080/posts/" + id + "/complete";
  //   axios.put(url, { postid: this.id, isComplete: this.isComplete }).then(response => {
  //     this.getData();
  //   });
  // };
  // deletePost = (id) => {
  //   let url = `http://localhost:8080/posts/${id}/delete`;
  //   axios.delete(url, { postid: this.id}).then(response => {
  //     console.log(response)
  //   });
    
  // };

  render() {
    return (
      <div>
        <h3>(React)</h3>
        <input ref={this.postName} />
        <button type="button" className="btn btn-primary" onClick={this.addPost}>add</button>
        <ul>
          {this.state.posts.map(p => (
            <li key={p.id}>
              {p.postMessage} <button type="button" className="btn btn-success">Complete</button><button type="button" className="btn btn-danger">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Posts;
