import React from 'react';

export default class Confirmation extends React.Component{
    render() {
        return(
            <div>
                <div onLoad={this.props.welcomeNewUser}>
                    {this.props.user}
                </div>
            </div>
        )
    }
}