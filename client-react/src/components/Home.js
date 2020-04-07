import React from 'react';
import BGVideo from '../assets/homepage-bg-vid.mp4';
import Logo from '../assets/logo.png';
import "../App.css";

const siteTitle = "inStitches";
const tagLine = "The home for all things crochet, knitting and sewing";

class Home extends React.Component {
    componentDidMount() {
        document.title = siteTitle + ' - ' + tagLine;
    }

    render() {
        return(
            <header id="hero">
                <div id="hero-content" className="section-content">
                    <img className="logo" src={Logo} width="150px" alt="instiches-header" />
                    <p className="tagline">The home for all things crochet, knitting, and sewing</p>
                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" placeholder="janelovescrochet@example.com" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <small id="emailHelp" className="form-text form-text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" placeholder="********" id="exampleInputPassword1" />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <video id="background-video" class="img-fluid" loop autoPlay>
                    <source src={BGVideo} type="video/mp4" />
                </video>
            </header>
        );
    }
}

export default Home;