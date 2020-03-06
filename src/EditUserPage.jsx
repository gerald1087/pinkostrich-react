import React from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom';


class EditUserPage extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            address_line1: "",
            address_line2: "",
            city: "",
            state: "",
            zip: " "
        }
    }
    handleChange = event => {
    this.setState({ name: event.target.value });
  }
  handleSubmit = event => {
    event.preventDefault();
  const user = {
      name: this.state.name,
      email: this.state.email,
      address_line1: this.state.address_line1,
            address_line2: this.state.address_line2,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
    };
  
        var apiBaseUrl = "http://localhost:3001/api/";
        var payload = {
            id: this.state.id,
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            address_line1: this.state.address_line1,
            address_line2: this.state.address_line2,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        }
        console.log(payload)
        axios.put(apiBaseUrl + "users" + payload.id, user)
            .then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
            console.log("values", this.state.id, this.state.name, this.state.email, this.state.address_line1, this.state.password);
        }

        render() {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input name="name" type="name" onChange={this.handleChange} className="form-control" aria-describedby="emailHelp" onChange={(event) => this.setState({ name: event.target.value })} />
                            
                        </div>
                        <div className="form-group">
                            <label >Email address</label>
                            <input name="email" type="email" onChange={this.handleChange} className="form-control" aria-describedby="emailHelp" onChange={(event) => this.setState({ email: event.target.value })}/>
                            
                        </div>
                        <div className="form-group">
                            <label >Password</label>
                            <input name="password" type="password" onChange={this.handleChange} className="form-control" aria-describedby="emailHelp" onChange={(event) => this.setState({ password: event.target.value })}/>
                            
                        </div>
                        <div className="form-group">
                            <label >Address Line 1</label>
                            <input name="address_line1" type="address" onChange={this.handleChange} className="form-control" aria-describedby="emailHelp" onChange={(event) => this.setState({ address_line1: event.target.value })}/>
                            
                        </div>
                        <div className="form-group">
                            <label >Address Line 2</label>
                            <input name="address_line2" type="address" onChange={this.handleChange} className="form-control" aria-describedby="emailHelp" onChange={(event) => this.setState({ address_line2: event.target.value })}/>
                            
                        </div>
                        <div className="form-group">
                            <label >City</label>
                            <input name="city" type="city" onChange={this.handleChange} className="form-control" aria-describedby="emailHelp" onChange={(event) => this.setState({ city: event.target.value })}/>
                            
                        </div>
                        <div className="form-group">
                            <label >State</label>
                            <input name="state" type="state" onChange={this.handleChange} className="form-control" aria-describedby="emailHelp" onChange={(event) => this.setState({ state: event.target.value })}/>
                            
                        </div>
                        <div className="form-group">
                            <label >Zip</label>
                            <input name="zip" type="zip" onChange={this.handleChange} className="form-control" aria-describedby="emailHelp" onChange={(event) => this.setState({ zip: event.target.value })}/>
                            
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            )
        }
    }
    
    export default EditUserPage