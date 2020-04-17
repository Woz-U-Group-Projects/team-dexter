import React from 'react';
import User from '../screens/User';


//Used for signup and updating user information
const UserForm = () => {
    
    return(
        <form>
                {/* <!--First name--> */}
                <div className="form-group">
                    <label for="user-first-name">First Name</label>
                    <input type="text" className="form-control" placeholder="Jane" id="user-first-name" aria-describedby="first Name" />
                </div>

                {/* Last Name */}
                <div className="form-group">
                    <label for="user-last-name">Last Name</label>
                    <input type="text" className="form-control" placeholder="Doe" id="user-last-name" aria-describedby="Last Name" />
                </div>

                {/* User Name */}
                <div className="form-group">
                    <label for="user-username">User Name</label>
                    <input type="email" className="form-control" placeholder="janecrochets89" id="user-username" aria-describedby="emailHelp" />
                </div>

                {/* Email */}
                <div className="form-group">
                    <label for="user-email">Email address</label>
                    <input type="email" className="form-control" placeholder="janelovescrochet@example.com" id="user-email" aria-describedby="emailHelp" />
                    <small id="emailHelp" className="form-text form-text-muted">We'll never share your email with anyone else.</small>
                </div>

                {/* Password */}
                <div className="form-group">
                    <label for="user-password">Password</label>
                    <input type="password" className="form-control" placeholder="********" id="user-password" />
                </div>

                <button type="submit" className="btn">Submit</button>
            </form>
    );
}

export default UserForm;