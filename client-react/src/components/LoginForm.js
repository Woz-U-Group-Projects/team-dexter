import React from 'react';
// import {Redirect} from "react-router-dom";
 export default class Login extends React.Component {
   render() {
     if (!this.props.token || this.props.token === "") {
       return (
          <form id="login-form">
              <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" className="form-control" name="username" placeholder="janelovescrochet88" id="user-email" onChange={this.props.onUsernameChange} />
                  {/* <small id="emailHelp" className="form-text form-text-muted">We'll never share your email with anyone else.</small> */}
              </div>
              <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" name="password" placeholder="********" id="user-password" onChange={this.props.onPasswordChange} />
              </div>
              <button type="submit" className="btn btn-primary" onClick={this.props.onLogin}>Submit</button>
          </form>
       );
     } else { 
       return (
         <div>
           Logged in
         </div>
        //  <Redirect to="/posts" />
       ); 
      }
   }
 }