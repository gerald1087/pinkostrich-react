import React from 'react';
import axios from 'axios';

import Header from "./Header"

class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    handleClick(e) {
        e.preventDefault()
        var apiBaseUrl = "http://localhost:3001/api/";
        var payload = {
        user_id: this.props.user.id,
        order_date: this.state.order_date,
        order_status: this.state.order_status
        }
        console.log(payload)
        axios.post(apiBaseUrl + 'orders', payload)
        .then(response => {
            alert('Order Successful!')
            window.location = '/products'
        }).catch(error =>  {
        console.log(error);
        });
        }

    componentDidMount() {
        
        let productId = this.props.match.params.id
        axios.get("http://localhost:3001/api/products/" + productId)
            .then(({ data }) => {
                this.setState(data);
            });
    }

    render() {
        return (
            <div>
                <header>
                    <Header/>
                </header>
                <div className="jumbotron">
                <img src={this.state.image} className="card-img-top" alt="Could not load"/>
                    <h1 className="display-4">{this.state.name}</h1>
        <p className="lead">{this.state.description}</p>
                    <hr className="my-4" />
        <p> $ {this.state.price}</p>
        <button type="submit" onClick={(event) => this.handleClick(event)} className="btn btn-primary">Buy Now!</button>
                </div>
            </div>
                )
            }
}

export default Product