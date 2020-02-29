import React from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom';


class UsersOrders extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            order_date: "",
            order_status: ""
        }
    }
    // componentDidMount() {
    //     axios.get()
    //     .then()
    // }
    handleClick(e) {
        e.preventDefault();
        var apiBaseUrl = "http://localhost:3001/api/";
        var payload = {
            id: this.state.id,
            order_date: this.state.order_date,
            order_status: this.state.order_status,
        }
        console.log(payload)
        axios.get(apiBaseUrl + "orders", payload)
            .then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
            console.log("values", this.state.id, this.state.order_date, this.state.order_status);
        }


    render() {
        return (
            <div>
            <div class="list-group">
<a href="#" class="list-group-item list-group-item-action active">
<div class="d-flex w-100 justify-content-between">
<h5 class="mb-1">Order Number" + value={this.state.id[0]}</h5>
<small>value={this.state.order_date}</small>
</div>
<p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
<small>Donec id elit non mi porta.</small>
</a>
<a href="#" class="list-group-item list-group-item-action">
<div class="d-flex w-100 justify-content-between">
<h5 class="mb-1">List group item heading</h5>
<small class="text-muted">3 days ago</small>
</div>
<p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
<small class="text-muted">Donec id elit non mi porta.</small>
</a>
<a href="#" class="list-group-item list-group-item-action">
<div class="d-flex w-100 justify-content-between">
<h5 class="mb-1">List group item heading</h5>
<small class="text-muted">3 days ago</small>
</div>
<p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
<small class="text-muted">Donec id elit non mi porta.</small>
</a>
</div>
            </div>

        )
    }
}
       
export default UsersOrders