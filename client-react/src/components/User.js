import React from 'react';
import axios from 'axios';
import User from '../screens/User';

export default class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            users: []
        }
        this.firstname = React.createRef();
        this.lastname = React.createRef();
        this.username = React.createRef();
        this.bio = React.createRef();
        this.userPassword = React.createRef(); 
    }

    getUser() {
        let url = "http://localhost:8080/api/user";
        axios.get(url).then(response => this.setState({ users: response.data }));
    };

    addUser = () => {
        let url = "http://locallhost:8080/api/user/signup";
        axios.post(url, 
            {firstName: this.firstname.current.value},
            {lastName: this.lastname.current.value },
            {username: this.username.current.value },
            {biography: this.bio.current.value },
            {password: this.userPassword.current.value}
            ).then(response => {
                this.getUser();
            })
    }
} 