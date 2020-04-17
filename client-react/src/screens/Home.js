import React from 'react';
import Logo from '../static/logo.png';
import "../App.css";
import Login from '../components/Login';
import Posts from '../components/Posts';
// import { Redirect } from 'react-router-dom';
import BGVideo from "../static/homepage-bg-vid.mp4";
// import axios from "axios";

const siteTitle = "inStitches";
const tagLine = "The home for all things crochet, knitting and sewing";

// import Routes from "./components/Routes";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { token: "", username: "", password: "", posts: [], error: "" };
  }

  componentDidMount() {
    document.title = siteTitle + " - " + tagLine;
  }

  onLogin = () => {
    fetch("http://localhost:8080/login", {
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    method: "POST",
    body: JSON.stringify({ username: this.state.username, password: this.state.password })
    })
    .then(res => res.headers.get("authorization"))
    .then(token => {
      if (token) {
        this.setState({ ...this.state, token: token });
      } else {
        this.setState({ ...this.state, error: "Unable to login with username and password." });
      }
    });
  }

  onUsernameChange = (e) => this.setState({ ...this.state, username: e.target.value });
  onPasswordChange = (e) => this.setState({ ...this.state, password: e.target.value });

  onGetPosts = () => {
    fetch("http://localhost:8080/api/posts", {
      headers: { 'Authorization': this.state.token }
    })
    .then(res => res.json())
    .then(json => this.setState({ ...this.state, posts: json }));
    console.log(" Got posts");
  }

  render() {
    return (
      <header id="hero">
        <div id="hero-content" className="section-content">
          <img className="logo" src={Logo} width="150px" alt="instiches-header" />
          <p className="tagline">The home for all things crochet, knitting, and sewing</p>
            {(!this.state.token || this.state.token === "")
              ? (<Login onUsernameChange={this.onUsernameChange}
              onPasswordChange={this.onPasswordChange}
              onLogin={this.onLogin}
              error={this.state.error}></Login>)
              : (<Posts Posts={this.state.posts} onGetPosts={this.onGetPosts}></Posts>)}
            <video id="background-video" className="img-fluid" loop autoPlay>
                <source src={BGVideo} type="video/mp4" />
            </video>
        </div>
      </header>
    );
  }
}


export default App;