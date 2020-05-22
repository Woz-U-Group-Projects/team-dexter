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
                <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} className="form-group" />
                <br/>

                <label>Full Name</label>
                <input type="text" name="Name" placeholder="Full Name" value={this.state.password} onChange={this.handleChange} className="form-group" />
                <br />

                <label>Email</label>
                <input type="text" name="email" placeholder="Email Address" value={this.state.password} onChange={this.handleChange} className="form-group" />
                <br />

                <label>Password</label>
                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} className="form-group" />
                <br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

