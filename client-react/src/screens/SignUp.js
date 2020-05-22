import React from 'react';
import axios from 'axios';
import SignUpForm from '../components/SignUpForm';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            firstname: '',
            lastname: '',
            password: '',
            token: '',
            error: '',
        }
        // this.username = React.createRef();
        // this.password = React.createRef();
        // this.firstname = React.createRef();
        // this.lastname = React.createRef();
    }

    handleChange() {

    }

    // handleSubmit = (e) => {
    //     let url = "http://localhost:8080/api/user/signup";
    //     fetch(url, {
    //     headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    //     method: "POST",
    //     body: JSON.stringify({ 
    //         username: this.username.current.value, 
    //         password: this.password.current.value, 
    //         firstname: this.firstname.current.value, 
    //         lastname: this.lastname.current.value})
    //     })
    //     .then(res => res.headers.get("authorization"))
    //     .then(token => {
    //       if (token) {
    //         this.setState({ ...this.state, token: token });
    //         e.preventDefault();
    //       } else {
    //         this.setState({ ...this.state, error: "Unable to signup" });
    //       }
    //     });
    //   }

      onSignUp = (e) => {
        let url = "http://localhost:8080/posts";
        axios.post(url, { id: this.state.id, 
            username: this.username.current.value, 
            password: this.password.current.value, 
            firstname: this.firstname.current.value, 
            lastname: this.lastname.current.value})
        .then(response => response.headers.get("authorization"))
        .then(token => {
            if(token) {
                this.setState({ ...this.state, token: token });
                e.preventDefault();
                this.welcomeUser();
            } else{
                this.setState({ ...this.state, error: "Unable to signup"})
            }          
        });
      };

    welcomeNewUser() {
        let url = `http://localhost:8080/api/user/{id}`;
        axios.get(url).then(response => this.setState({ posts: response.data }));
    }

    onUsernameChange = (e) => this.setState({ ...this.state, username: e.target.value });
    onPasswordChange = (e) => this.setState({ ...this.state, password: e.target.value });
    onFirstNameChange = (e) => this.setState({ ...this.state, firstname: e.target.value });
    onLastNameChange = (e) => this.setState({ ...this.state, lastname: e.target.value });

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

