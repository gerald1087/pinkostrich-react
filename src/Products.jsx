import React from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom';

class Products extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            category: '',
            price: '',
            image: ''
        }
    }

    handleClick(e) {
        e.preventDefault();
        var apiBaseUrl = "http://localhost:3001/api/products";
        var payload = {
            "name": this.state.name,
            "category": this.state.email,
            "price": this.state.password,
            "image": this.state.address_line1,
        }
        axios.post(apiBaseUrl + "products", payload)
            .then(function (data) {
                console.log(data);
            }).catch(function (error) {
                console.log(error);
            });
            console.log("values", this.state.name, this.state.category, this.state.price, this.state.image);
    }

    render() {
        return (
            <div>
           <div class="card" style={{width: "18rem"}}>
  <img className="card-img-top" src="..." alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Shoe 1</h5>
    <p className="card-text">Reg.Price: 0.10 $ | Sale Price: 0.01 $</p>
    <a href="#" className="btn btn-primary">More Product Details</a>
  </div>
</div>
            </div>
        )
    }
}

export default Products