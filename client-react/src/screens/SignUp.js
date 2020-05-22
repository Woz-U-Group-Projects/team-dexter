import React from 'react';
import { connect } from 'react-redux';

export default class SignUp extends React.Component {
    state = {
        username: "",
        password: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.userPostFetch(this.state)
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>Sign Up</h1>
                <label>Username</label>
                <input name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} className="form-group" />
                <br/>

                <label>Username</label>
                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} className="form-group" />
                
                <button type="submit">Submit</button>
            </form>
        )
    }
}

