import React from 'react';

import Logo from '../static/logo.png';
import "../App.css";
import Login from '../components/Login';
import BGVideo from "../static/homepage-bg-vid.mp4";

const siteTitle = "inStitches";
const tagLine = "The home for all things crochet, knitting and sewing";

// import Routes from "./components/Routes";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { token: "", usernameOrEmail: "", password: "", posts: [], error: "" };
  }

  componentDidMount() {
    document.title = siteTitle + " - " + tagLine;
    let bgvideo = document.getElementById("background-video");
    bgvideo.autoPlay = true;
  }

  componentWillUnmount() {
    let bgvideo = document.getElementById("background-video");
    bgvideo.pause();
  }

  onLogin = (e) => {
    fetch("http://localhost:8080/api/auth/signin", {
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    method: "POST",
    body: JSON.stringify({ usernameOrEmail: this.state.usernameOrEmail, password: this.state.password })
    })
    .then(res => res.headers.get("authorization"))
    .then(token => {
      if (token) {
        this.setState({ ...this.state, token: token });
        e.preventDefault();
        window.location.href = '/posts';
      e.preventDefault();
      } else {
        this.setState({ ...this.state, error: "Unable to login with username and password." });
      }
    });
  }

  onUsernameOrEmailChange = (e) => this.setState({ ...this.state, usernameOrEmail: e.target.value });
  onPasswordChange = (e) => this.setState({ ...this.state, password: e.target.value });

  render() {
    return (
      <header id="hero">
        <div id="hero-content" className="section-content">
          <img className="logo" src={Logo} width="150px" alt="instiches-header" />
          <p className="tagline">The home for all things crochet, knitting, and sewing</p>
            {(!this.state.token || this.state.token === "")
              ? (<Login onUsernameOrEmailChange={this.onUsernameOrEmailChange}
              onPasswordChange={this.onPasswordChange}
              onLogin={this.onLogin}
              error={this.state.error}></Login>)
              : null}
        </div>
        <video id="background-video" className="img-fluid" loop autoPlay muted>
            <source src={BGVideo} type="video/mp4" />
        </video>
      </header>
    );
  }

}

export default Home;