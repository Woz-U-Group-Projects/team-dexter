import React from "react";

const siteTitle = "inStitches";

class About extends React.Component {
    componentDidMount() {
        document.title = 'About Us - ' + siteTitle;
    }

    render() {
        return (
            
                <div>This is the about page</div>
            );
    }
}

export default About;