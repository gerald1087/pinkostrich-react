import React from 'react';
import axios from 'axios';
import { Link, Route, Router } from 'react-router-dom';
// import history from './history';
import history from './components/layouts/history';
import Button from '@material-ui/core/Button';


class EditUserPage extends React.Component {

    constructor() {
        super();
        this.state = {
            id: [],
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
    this.setState({ 
            id: event.target.value[0],
            name: event.target.value,
            email: event.target.value,
            password: event.target.value,
            address_line1: event.target.value,
            address_line2: event.target,
            city: event.target.value,
            state: event.target.value,
            zip: event.target.value });
  }
  handleSubmit = event => {
    event.preventDefault();
  const user = {
      id: this.state.id[0],
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      address_line1: this.state.address_line1,
            address_line2: this.state.address_line2,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
    };
  console.log("and next is the payload object")
        var apiBaseUrl = "http://localhost:3001/api/";
        var payload = {
            id: this.state.id[0],
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            address_line1: this.state.address_line1,
            address_line2: this.state.address_line2,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        }
        console.log("and next is the api call")
        console.log(payload)
        if(this.state.id === payload.id) {
        // axios.put(`http://localhost:3001/api/users/${this.state.id}`, body)
        axios.put(apiBaseUrl + "updateuser/" + user.id)
            .then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
            console.log("values", this.state.id, this.state.name, this.state.email, this.state.address_line1, this.state.password);
        } else {alert("User isn't matching logged user records")}
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
                        <Button size="small"onClick={() => history.push('/profile')}>Go Back</Button>

                    </form>
                </div>
            )
        }
    }
    
export default EditUserPage