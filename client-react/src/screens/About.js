import React from "react";

const siteTitle = "inStitches";
class About extends React.Component {
    componentDidMount() {
        document.title = 'About Us - ' + siteTitle;
    }

    render() {
        return (
            <h3>This is the about page</h3>
            );
    }
}

export default About;