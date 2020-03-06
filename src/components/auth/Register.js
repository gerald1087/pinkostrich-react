import React, { Component } from "react";
import axios from 'axios'


class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            address_line1: '',
            address_line2: '',
            city: '',
            state: '',
            zip: ''
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick(e) {
        e.preventDefault();
        var apiBaseUrl = "http://localhost:3001/api/";
        var payload = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            address_line1: this.state.address_line1,
            address_line2: this.state.address_line2,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            is_admin: false,
        }
        console.log(payload)
        axios.post(apiBaseUrl + "register", payload)

            .then(response => {
                if (response.statusText === 'OK') {
                    this.props.handleSuccessfulRegistration(response.data)
                    alert('Registration Successful!')
                    window.location.reload()
                }
            }).catch(error => {
                console.log(error);
            });

            console.log("values", this.state.name, this.state.email, this.state.address_line1, this.state.password);
        }


    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input name="name" type="name" className="form-control" value={this.state.name} onChange={this.handleChange} />
                        
                    </div>
                    <div className="form-group">
                        <label >Email address</label>
                        <input name="email" type="email" className="form-control" value={this.state.email} onChange={this.handleChange}/>
                        
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input name="password" type="password" className="form-control" value={this.state.password} onChange={this.handleChange}/>
                        
                    </div>
                    <div className="form-group">
                        <label >Address Line 1</label>
                        <input name="address_line1" type="address" className="form-control" value={this.state.address_line1} onChange={this.handleChange}/>
                        
                    </div>
                    <div className="form-group">
                        <label >Address Line 2</label>
                        <input name="address_line2" type="address" className="form-control" value={this.state.address_line2} onChange={this.handleChange}/>
                        
                    </div>
                    <div className="form-group">
                        <label >City</label>
                        <input name="city" type="city" className="form-control" value={this.state.city} onChange={this.handleChange}/>
                        
                    </div>
                    <div className="form-group">
                        <label >State</label>
                        <input name="state" type="state" className="form-control" value={this.state.state} onChange={this.handleChange}/>
                        
                    </div>
                    <div className="form-group">
                        <label >Zip</label>
                        <input name="zip" type="zip" className="form-control" value={this.state.zip} onChange={this.handleChange}/>
                        
                    </div>
                    <button type="submit" onClick={(event) => this.handleClick(event)} className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Register