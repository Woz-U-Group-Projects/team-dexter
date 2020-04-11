import React from 'react';
import BGVideo from '../assets/homepage-bg-vid.mp4';
import Logo from '../assets/logo.png';
import "../App.css";
import Login from '../components/Login';

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
                    <Login />
                </div>
                <video id="background-video" className="img-fluid" loop autoPlay>
                    <source src={BGVideo} type="video/mp4" />
                </video>
            </header>
        );
    }
}

export default Home;