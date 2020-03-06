import React, { Component } from "react";
import axios from 'axios';

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
        email:'',
        password:'',
        };
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick(e) {
        e.preventDefault()
        var apiBaseUrl = "http://localhost:3001/api/";
        var payload = {
        email: this.state.email,
        password: this.state.password,
        }
        console.log(payload)
        axios.post(apiBaseUrl + 'login', payload)
        .then(response => {
            if (response.statusText === 'OK') {
                this.props.handleSuccessfulLogin(response.data)
                alert('Welcome!')
            }

        }).catch(error =>  {
        console.log(error);
        });
        }

    render() { 
            return (
                <div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.email} onChange={this.handleChange}/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input name="password" type="password" className="form-control" id="exampleInputPassword1" value={this.state.password} onChange={this.handleChange}/>
                        </div>
                        
                        <button type="submit" onClick={(event) => this.handleClick(event)} className="btn btn-primary">Submit</button>
                    </form>
                </div>
            )
        }
        
}
export default Login