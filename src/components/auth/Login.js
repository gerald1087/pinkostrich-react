import React, { Component } from "react";
import axios from 'axios';


class Login extends React.Component {
      
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
//     handleSubmit(e) {
//         e.preventDefault()
//         var apiBaseUrl = "http://localhost:3001/api/";
//         var payload = {
//         email: this.state.email,
//         password: this.state.password,
//         loggedIn: true
//         }
//         // window.location = '/landing'
//         // console.log(payload)
//         // axios.post(apiBaseUrl + 'login', payload)
//         // .then(function (response) {
//         // console.log(response);
//         // }).catch(function (error) {
//         // console.log(error);
//         // });

//        function apiLogin(data, successCallback, errorCallback) {

//     axios.post(apiBaseUrl + 'login', data )
//     .then(successCallback)
//     .catch(errorCallback);
// }

//         let email_input = document.getElementById('exInputEmail').val
//         let password_input = document.getElementById('exInputPassword').val

//         let data = {
//           email : email_input,
//           password: password_input
//         };

//         let successCallback = function(response) {
//           window.localStorage.setItem("user_id", response.id);
//           window.localStorage.setItem("name", response.name);


    

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
              <a href="/login/github">Log In with Github</a>
                </div>
            )
        }
        

}
export default Login