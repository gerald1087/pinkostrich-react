import React from 'react';
import axios from 'axios'

class ListProduct extends React.Component {

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
            "category": this.state.email,
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
                        <input name="name" type="name" className="form-control" aria-describedby="emailHelp" onChange={(event, newValue) => this.setState({ name: newValue })} />
                        
                    </div>
                    <div className="form-group">
                        <label >Category</label>
                        <input name="category" type="category" className="form-control" aria-describedby="emailHelp" onChange={(event, newValue) => this.setState({ email: newValue })}/>
                        
                    </div>
                    <div className="form-group">
                        <label >Price</label>
                        <input name="price" type="" className="form-control" aria-describedby="emailHelp" onChange={(event, newValue) => this.setState({ password: newValue })}/>
                        
                    </div>
                    <div className="form-group">
                        <label >Description</label>
                        <input name="description" type="" className="form-control" aria-describedby="emailHelp" onChange={(event, newValue) => this.setState({ address_line1: newValue })}/>
                        
                    </div>
                    <div className="form-group">
                        <label >Available Quantity</label>
                        <input name="quantity" type="address" className="form-control" aria-describedby="emailHelp" onChange={(event, newValue) => this.setState({ address_line2: newValue })}/>
                        
                    </div>
                    <div className="form-group">
                        <label >Image</label>
                        <input name="image" type="url" className="form-control" aria-describedby="emailHelp" onChange={(event, newValue) => this.setState({ city: newValue })}/>
                        </div>
                    <button type="submit" onClick={(event) => this.handleClick(event)} className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default ListProduct