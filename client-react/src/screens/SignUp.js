import React from 'react';

class SignUp extends React.Component {
    state = {
        username: "",
        password: ""
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

export default (SignUp);