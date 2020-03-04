// import React from 'react';
import React, {Component} from 'react'
import axios from 'axios';

import {Route} from 'react-router-dom';

class User extends React.Component {

  state = {
    name : "",
    email : '',
    id : ''
    
  };

  constructor() {

    super();

    
    var apiBaseUrl = "http://localhost:3001/api/";
       var payload = {
            id: 1,
            name: "",
            email: "",
            createdAt: ""
        }
        console.log(payload)
        axios.get(apiBaseUrl + "users", payload.id).then(function (response) {
            console.log(response.data[0]);
            let userData = response.data[0];
            console.log(userData);
            this.setState({id : userData.id, 
                        name: userData.name, 
                        email: userData.email, 
                        createdAt: userData.createdAt});
        }).catch(function (error) {
            console.log(error);
        });
  }
    
    // document.getElementById("editUser").addEventListener("click",
    // function() {
    // return location.href = "http://localhost:3001/api/edituserpage"


    componentDidMount() {
       
    }

    
    render() {
      
      const { name, email, createdAt } = this.state;
        return (
            <div>
                <div className="card"
                    style={
                        {width: '18rem'}
                }>
                    {/* <img src="'https://avataaars.io/?avatarStyle=Transparent&topType=LongHairBigHair&accessoriesType=Round&hairColor=BrownDark&facialHairType=MoustacheMagnum&facialHairColor=Auburn&clotheType=BlazerSweater&eyeType=EyeRoll&eyebrowType=AngryNatural&mouthType=Tongue&skinColor=Tanned'" className="card-img-top" alt="unable to load"/> */}
                    <div className="card-body">
                        <h5 className="card-title">  ~name~
                            
                        </h5>
                        <p className="card-text"> {this.state.email}
      </p>
                        <a href="#" className="btn btn-primary">
                            Thanks for being a valued PO user since ~date
                           
                            
                        </a>
                        <button id="viewOrders">Order History</button>
                        <br/>
                        <br />
                        <button id="editUser" >Edit User Profile</button>
                        {/* onclick="window.location.href = 'http://localhost:3001/api/edituserpage'" */}
                      
                        <button id="Delete">Delete User Profile</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default User;
