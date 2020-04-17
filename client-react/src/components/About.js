import React from "react";
import KHoflerImg from "../static/03-07-2019-16-31-23.jpeg";
import VStoryImg from "../static/IMG-2379.jpg";
import WHardinImg from "../static/IMG-2438.JPG";
import ACarpenterImg from "../static/IMG-2439.jpg";

const About = () => {
    return (
        <div>
            <title>Our Mission</title>
        <p> Our mission is to bring together people who have a true love for crafts to a social platform to showcase their creative talents and purchase</p>

        <h1> "About The Team"</h1>
        <p> The inStiches Admin consist of four developers who came together for the love of crafts </p>
        <br>
        </br>
        <img src={KHoflerImg} alt="karelle-hofler" width= "350" height = "200" border = "5" />
        <p> Meet Karelle, 
        "I'm digital designer and developer. When I'm not creating websites, I'm playing Skyrim, working out, or creating  some digital paintings." </p>
        <br></br>
        <img src={VStoryImg} alt="veveca-story"  width= "350" height = "200" border = "5" />
        <p>Meet Veveca,
            I am a former Medical Secretary of 14 years turned IT Specialist.  I have a passion for puzzles.</p>
        <br></br>
        <img src={WHardinImg} alt="witney-hardin"width= "350" height = "200" border = "5" />
        <p>Meet Witney,
        "I'm A mother of two boys ages 11 and 9 that has a passion for arts and crafts. One of her man favorites is knitting scafs and blankets.</p>
        <br></br>
        <img src={ACarpenterImg}  alt="andrew-carpenter" width="350" height = "200" border = "5" />
        <p> Meet Andrew,
            A whitty ex-comedian that loves video games and crocheting. He is currently working on building his own video game,</p>
        </div>

    );
}

export default About;