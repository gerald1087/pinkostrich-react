import React from 'react';
import axios from 'axios'; 
// import '../public/default-profile.png'
import { Route } from 'react-router-dom';

class User extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        name:'',
        email:'',
        }
    }
    // document.getElementById("editUser").onclick = function() {
    //   location.href = "http://localhost:3001//api/edituserpage/"
    // }

    render() {
        return (
            <div>
                <div className="card" style={{width: '18rem'}}>
                    <img src="../public/default-profile.png" className="card-img-top" alt="unable to load" />
                    <div className="card-body">
                        <h5 className="card-title">value={this.state.name}</h5>
                        <p className="card-text">value={this.state.email}</p>
                        <a href="#" className="btn btn-primary">Thanks value={this.state.name} for being a valued customer. </a>
                        <button id= "editUser">Edit User Profile</button>
                        <button id= "viewOrders">Orders</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default User;