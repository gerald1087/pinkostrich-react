import React from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom';
// import User from './User';

class ViewOrder extends React.Component {
   
    constructor() {
        super();
        this.state = {
            order_id: "",
            product_id: "",
            quantity: ""
        }
    }

    handleClick(e) {
        e.preventDefault();
        var apiBaseUrl = "http://localhost:3001/api/";
        var payload = {
            order_id: this.state.user_id,
            is_admin: this.state.is_admin,
            order_id: this.state.order_id,
        }
        console.log(payload)
        axios.get(apiBaseUrl + "users", payload.user_id)
            .then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
            console.log("values", this.state.user_id, this.state.is_admin, this.state.order_id);
        }

        render() {
        return (
            
            <div >
<div className="card" id={"center"} style={
                        {width: '18rem'}}>
  <div className="card-body">
    <h5 className="card-title">order_id </h5>
    <h6 className="card-subtitle mb-2 text-muted">Order Date</h6>
    <p className="card-text">Product ; Quantity</p>
  
    <br />
    <a href="#" className="card-link">Newer Order</a>
    <a href="#" className="card-link">Older Order</a>
  </div>
</div>
  <a href="/usersorders" className="card-link">Back to All Orders</a>
            </div>
           
        )}
    }
export default ViewOrder