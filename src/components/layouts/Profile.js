import React from 'react'
import axios from 'axios'

import Header from "./Header"

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    handleOrdersClick(e) {
        e.preventDefault()
        var apiBaseUrl = "http://localhost:3001/api/";
        var payload = {
        user_id: this.props.user.id,
        }
        console.log(payload)
        axios.get(apiBaseUrl + 'orders', payload)
        .then(response => {
        }).catch(error =>  {
        console.log(error);
        });
        }


    handleDeleteClick(e) {
        e.preventDefault()
        var apiBaseUrl = "http://localhost:3001/api/";
        var payload = {
        id: this.props.user.id,
        }
        console.log(payload)
        axios.delete(apiBaseUrl + 'deleteprofile', payload)
        .then(response => {
        }).catch(error =>  {
        console.log(error);
        });
        }

    render() {
        return (
            <div>
<header>
                    <Header/>
                </header>

<div className="card" >
                <h1>Status: {this.props.loggedIn}</h1>
                {/* <img src="..." class="card-img-top" alt="..."> */}
                    <div className="card-body">
        <h3 className="card-title">{this.props.user.name}</h3>
        <p className="card-text">{this.props.user.address_line1}</p>
        <p className="card-text">{this.props.user.city}</p>
        <p className="card-text">{this.props.user.state}</p>
        <p className="card-text">{this.props.user.zip}</p>
        <button type="submit" onClick={(event) => this.handleOrdersClick(event)} className="btn btn-primary">View Orders</button>
        <button type="submit" onClick={(event) => this.handleDeleteClick(event)} className="btn btn-primary">Delete Profile</button>
                        
                    </div>
</div>
            </div>
            
                )
            }
        }
        
export default Profile