import React from 'react';
import axios from 'axios';
import DefaultUserImg from '../static/user-profile-img.png';

export default class UserPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = { users: []
    };
        this.firstname = React.createRef();
        this.lastname = React.createRef();
        this.username = React.createRef();
        this.bio = React.createRef();
        this.userPassword = React.createRef(); 
    }

    componentDidMount() {
        this.getUser();
    }

    getUser = (id) => {
        let url = `http://localhost:8080/${id}`;
        axios.get(url); 
    }

    render() {
        return (
            <div>
                {this.state.users.map(u => (
                    <div key={u.id}>
                    <img src={DefaultUserImg} />
                    <p>{u.username}</p>
                    </div>
                ))}
            </div>
        )
    }
}