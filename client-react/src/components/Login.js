  import React from 'react';

  export default class Login extends React.Component {
    render() {
      if (!this.props.token || this.props.token === "") {
        return (
          <div>
            <div style={{color: "red"}}>{(this.props.error ? this.props.error: '')}</div>
            <div>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" className="form-control" name="username" placeholder="janelovescrochet88" onChange={this.props.onUsernameChange} />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" className="form-control" name="password" onChange={this.props.onPasswordChange} />
            </div>
            <div>
              <button onClick={this.props.onLogin}>Submit</button>
            </div>
          </div>
        );
      } else { return (<div>Logged In</div>); }
    }
  } 