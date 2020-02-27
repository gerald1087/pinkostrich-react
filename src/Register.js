import React from 'react'
import axios from 'axios'

class Register extends React.Component {

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
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input name="name" type="name" className="form-control" aria-describedby="emailHelp" onChange={(event, newValue) => this.setState({ name: newValue })} />
                        
                    </div>
                    <div className="form-group">
                        <label >Email address</label>
                        <input name="email" type="email" className="form-control" aria-describedby="emailHelp" onChange={(event, newValue) => this.setState({ email: newValue })}/>
                        
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input name="password" type="password" className="form-control" aria-describedby="emailHelp" onChange={(event, newValue) => this.setState({ password: newValue })}/>
                        
                    </div>
                    <div className="form-group">
                        <label >Address Line 1</label>
                        <input name="address_line1" type="address" className="form-control" aria-describedby="emailHelp" onChange={(event, newValue) => this.setState({ address_line1: newValue })}/>
                        
                    </div>
                    <div className="form-group">
                        <label >Address Line 2</label>
                        <input name="address_line2" type="address" className="form-control" aria-describedby="emailHelp" onChange={(event, newValue) => this.setState({ address_line2: newValue })}/>
                        
                    </div>
                    <div className="form-group">
                        <label >City</label>
                        <input name="city" type="city" className="form-control" aria-describedby="emailHelp" onChange={(event, newValue) => this.setState({ city: newValue })}/>
                        
                    </div>
                    <div className="form-group">
                        <label >State</label>
                        <input name="state" type="state" className="form-control" aria-describedby="emailHelp" onChange={(event, newValue) => this.setState({ state: newValue })}/>
                        
                    </div>
                    <div className="form-group">
                        <label >Zip</label>
                        <input name="zip" type="zip" className="form-control" aria-describedby="emailHelp" onChange={(event, newValue) => this.setState({ zip: newValue })}/>
                        
                    </div>
                    <button type="submit" onClick={(event) => this.handleClick(event)} className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Register