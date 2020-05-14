import React from "react";
import KHoflerImg from "../static/03-07-2019-16-31-23.jpeg";
import VStoryImg from "../static/IMG-2379.jpg";
import WHardinImg from "../static/IMG-2438.JPG";
import ACarpenterImg from "../static/received_538943533438579.jpeg";



const About = () => {
    return (
  
    
        <div className="About container-fluid">
            
            <h1>Our Mission</h1>
            <title>Our Mission</title>
        <p> Our mission is to bring together people who have a true love for crafts to a social platform to showcase their creative talents and purchase</p>

        
        <h1> About The Team</h1>
        <p> The inStiches Admin consist of four developers who came together for the love of crafts </p>
        <br>
        </br>
        <center>
        <div className="Karelle">
        <img src={KHoflerImg} alt="karelle-hofler" width= "250" height = "200" border = "5"/>
        <h5><p> Meet Karelle, 
        A digital designer and developer. When she's not creating websites, Karelle enjoy's playing Skyrim, working out, or creating  some digital paintings." </p></h5> <a href="https://www.linkedin.com/in/karelle-hofler/=">See Profile</a>
        </div>
    
        <br></br>
        <img src={VStoryImg} alt="veveca-story"  width= "250" height = "200" border = "5" />
        <h5><p>Meet Veveca,
            A mom of four, former Medical Secretary of 14 years turned IT Specialist.  She has a passion for puzzles.</p></h5> <a href="https://www.linkedin.com/in/veveca-story-63b72418/">See Profile</a>
        <br></br>
        <img src={WHardinImg} alt="witney-hardin" 
        width= "250" height = "200" border = "5" />
        <h5><p>Meet Witney,
        A mother of two boys ages 11 and 9 that has a passion for arts and crafts. One of her man favorites is knitting scarfs and blankets.</p></h5> <a href="https://www.linkedin.com/in/witney-hardin-73a553167">See Profile</a>
        <br></br>
        <img src={ACarpenterImg}  alt="andrew-carpenter" width="250" height = "200" border = "5" />
        <h5><p> Meet Andrew,
            A whitty ex-comedian that loves video games and crocheting. He is currently working on building his own video game.</p></h5> <a href="https://www.linkedin.com/in/andrew-carpenter-b379441a2/">See Profile</a>
        </center>
        </div>

       

    );
}
export default About;
