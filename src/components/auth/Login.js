import React from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";


class Login extends React.Component {
      
    constructor(props){
        super(props);
        this.state = {
        email:'',
        password:'',
        loggedIn: false
        };
        // this.handleClick = this.handleClick.bind(this)
    
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

//           window.location = 'index.html';
//         }

//         let failureCallback = function(response) {
//          document.getElementById('errorMessage').innerHTML = response.responseText
//         }

//         apiLogin(data, successCallback, failureCallback);
    

//         }

    


    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exInputEmail" aria-describedby="emailHelp" onChange={(event) => this.setState({ email: event.target.value })}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exInputPassword" onChange={(event) => this.setState({ password: event.target.value })}/>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                    </div>
                    <button type="submit" onClick={(event) => this.handleSubmit(event)} className="btn btn-primary">Submit</button>
                </form>
                <a href="/login/github">Log In with Github</a>
            </div>
        )
    }
}
export default Login