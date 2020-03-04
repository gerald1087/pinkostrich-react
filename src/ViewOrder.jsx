import React from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom';
import User from './User';

class ViewOrder extends React.Component {
   
    constructor() {
        super();
        this.state = {
            user_id: "",
            is_admin: false,
            order_id: ""
        }
    }

    handleClick(e) {
        e.preventDefault();
        var apiBaseUrl = "http://localhost:3001/api/";
        var payload = {
            user_id: this.state.user_id,
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
            console.log("values", this.stateuser_id, this.state.is_admin, this.state.order_id);
        }

        render() {
        return (
            <div>
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">value={this.state.order_id} </h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Back to All Orders</a>
    <a href="#" class="card-link">Go to more recent order</a>
    <a href="#" class="card-link">Go to next oldest order</a>
  </div>
</div>
            </div>
        )}
    }
export default ViewOrder