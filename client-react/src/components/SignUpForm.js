import React from 'react';

export default class SignUpForm extends React.Component {
    render() {
        if(!this.props.token || this.props.token === "") {
            return(
                <form>
                    <h1>Sign Up</h1>
                    <label>* Username</label>
                    <input name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} className="form-group" />
                    <br/>
                    
                    <label>First Name</label>
                    <input name="firstname" placeholder="First Name" value={this.state.username} onChange={this.handleChange} className="form-group" />
                    <br/>

                    <label>Last Name</label>
                    <input name="lastname" placeholder="Last Name" value={this.state.username} onChange={this.handleChange} className="form-group" />
                    <br/>

                    <label>* Password</label>
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} className="form-group" />
                    <br />
                    <button onClick={this.props.onSignUp}>Submit</button>
                </form>
            )
        }
    }
}