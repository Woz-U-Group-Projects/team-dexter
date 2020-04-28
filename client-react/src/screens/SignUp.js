// import React from 'react';
// // import axios from 'axios';

// // //Create a class that will post the info the user inputs thus creating
// // // a new user to the database.
// class SignUp extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             users: []
//         };
//         this.firstname = React.createRef();
//         this.lastname = React.createRef();
//         this.username = React.createRef();
//         this.bio = React.createRef();
//         this.userPassword = React.createRef(); 
//     }

//     getUser() {
//         let url = "http://localhost:8080/api/user";
//         axios.get(url).then(response => this.setState({ users: response.data }));
//     };

//     addUser = () => {
//         let url = "http://locallhost:8080/api/user/signup";
//         axios.post(url, 
//             {username: this.username.current.value },
//             {password: this.userPassword.current.value}
//             ).then(response => {
//                 this.getUser();
//             })
//     }

//     render() {
//         return(
//             <div>
//             <form id="signup">
//                 {/* User Name */}
//                     <label for="user-username">User Name</label>
//                     <input ref={this.username} className="form-control" placeholder="janecrochets89" id="user-username" aria-describedby="emailHelp" />

//                 {/* Password */}
//                     <label for="user-password">Password</label>
//                     <input ref={this.userPassword} className="form-control" placeholder="********" id="user-password" />
//                 <button type="submit" className="btn" onClick={this.addUser()}>Sign Up</button>
//             </form>
//             <div id="confirmation">
//                 {this.state.users.map(u => (
//                     <p key={u.userId}>
//                         Thank you {u.username} for signing up!
//                     </p>
//                 ))}
//             </div>
//             </div>
            
//         );
//     }
// }


// // const SignUp = () => {
// //     return(
// //         <div>This is the signup </div>
// //     )
// // }

// export default SignUp;