import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom'

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        email:'',
        password:''
        }
    }

    handleClick(e) {
        e.preventDefault()
        var apiBaseUrl = "http://localhost:3001/api/";
        var payload = {
        email: this.state.email,
        password: this.state.password
        }
        console.log(payload)
        axios.post(apiBaseUrl + 'login', payload)
        .then(function (response) {
        console.log(response);
        }).catch(function (error) {
        console.log(error);
        });
        }

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event) => this.setState({ email: event.target.value })}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" onChange={(event) => this.setState({ password: event.target.value })}/>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" onClick={(event) => this.handleClick(event)} className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
export default Login