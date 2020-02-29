import React from 'react';
import axios from 'axios'

class SellProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            category: '',
            price: 0,
            description: '',
            available_quantity: 0,
            image: '',
        }
    }

    handleClick(e) {
        e.preventDefault();
        var apiBaseUrl = "http://localhost:3001/api/";
        var payload = {
            "name": this.state.name,
            "category": this.state.category,
            "price": this.state.price,
            "description": this.state.description,
            "available_quantity": this.state.available_quantity,
            "image": this.state.image,
        }
        axios.post(apiBaseUrl + "products", payload)
            .then(function (data) {
                console.log(data);
            }).catch(function (error) {
                console.log(error);
            });
            console.log("values", this.state.name);
        }

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input name="name" type="name" className="form-control" aria-describedby="emailHelp" onChange={(event) => this.setState({ name: event.target.value })} />
                        
                    </div>
                    <div className="form-group">
                        <label >Category</label>
                        <input name="category" type="category" className="form-control" aria-describedby="emailHelp" onChange={(event) => this.setState({ category: event.target.value })}/>
                        
                    </div>
                    <div className="form-group">
                        <label >Price</label>
                        <input name="price" type="" className="form-control" aria-describedby="emailHelp" onChange={(event) => this.setState({ price: event.target.value })}/>
                        
                    </div>
                    <div className="form-group">
                        <label >Description</label>
                        <input name="description" type="" className="form-control" aria-describedby="emailHelp" onChange={(event) => this.setState({ description: event.target.value })}/>
                        
                    </div>
                    <div className="form-group">
                        <label >Available Quantity</label>
                        <input name="quantity" type="address" className="form-control" aria-describedby="emailHelp" onChange={(event) => this.setState({ available_quantity: event.target.value })}/>
                        
                    </div>
                    <div className="form-group">
                        <label >Image</label>
                        <input name="image" type="url" className="form-control" aria-describedby="emailHelp" onChange={(event) => this.setState({ image: event.target.value })}/>
                        </div>
                    <button type="submit" onClick={(event) => this.handleClick(event)} className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default SellProduct