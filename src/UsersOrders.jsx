import React from 'react'
import axios from 'axios'
import { Link, Route, Router } from 'react-router-dom';
import history from './components/layouts/history';
import Button from '@material-ui/core/Button';

class UsersOrders extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            order_date: "",
            order_status: ""
        }
    }
    componentDidMount() {
        var apiBaseUrl = "http://localhost:3001/api/users/";
        var payload = {
            id: this.state.id,
            order_date: this.state.order_date,
            order_status: this.state.order_status,
        }
        console.log(payload)
        axios.get(apiBaseUrl + "orders", payload.id)
            .then(function (response) {
                console.log(response);
                alert("Sorry, this order's page isn't yet complete!")
            }).catch(function (error) {
                console.log(error);
            });
            console.log("values", this.state.id, this.state.order_date, this.state.order_status);
        }


    render() {
        return (
            <div>
            <div className="list-group">
<a href="#" className="list-group-item list-group-item-action active">
<div className="d-flex w-100 justify-content-between">
<h5 className="mb-1">"Order Number" + value={this.state.id[0]}</h5>
<small>value={this.state.order_date}</small>
</div>
<p className="mb-1">value={this.state.order_status}</p>
<small><button>View Order</button></small>
</a>
<a href="#" className="list-group-item list-group-item-action">
<div className="d-flex w-100 justify-content-between">
<h5 className="mb-1">"Order Number" + value={this.state.id[1]}</h5>
<small className="text-muted">value={this.state.order_date}</small>
</div>
<p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
<small className="text-muted">Donec id elit non mi porta.</small>
</a>
<a href="#" className="list-group-item list-group-item-action active">
<div className="d-flex w-100 justify-content-between">
<h5 className="mb-1">"Order Number" + value={this.state.id[2]}</h5>
<small>value={this.state.order_date}</small>
</div>
<p className="mb-1">value={this.state.order_status}</p>
<small><button>View Order</button></small>
</a>
<a href="#" className="list-group-item list-group-item-action">
<div className="d-flex w-100 justify-content-between">
<h5 className="mb-1">"Order Number" + value={this.state.id[3]}</h5>
<small className="text-muted">value={this.state.order_date}</small>
</div>
<p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
<small className="text-muted">Donec id elit non mi porta.</small>
</a>
</div>
        <Button size="small"onClick={() => history.push('/profile')}>Go Back</Button>
            </div>

        )
    }
}
       
export default UsersOrders