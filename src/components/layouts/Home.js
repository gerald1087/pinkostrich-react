import React, { Component } from "react";
import Register from "../auth/Register";
import Login from "../auth/Login";

class Home extends Component {
constructor(props) {
    super(props);

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleSuccessfulRegistration = this.handleSuccessfulRegistration.bind(this);
}

handleSuccessfulLogin(data) {
    this.props.handleLogin(data);
    this.props.history.push('/pinkostrich');
}

handleSuccessfulRegistration(data) {
    this.props.history.push('/');
}


    render() {
        return (

            <div>
                <h1>Status: {this.props.loggedIn}</h1>
                <h1>Register</h1>
                <Register handleSuccessfulRegistration={this.handleSuccessfulRegistration} />
                <h1>Login</h1>
                <Login handleSuccessfulLogin={this.handleSuccessfulLogin}/>

            </div>
        );
    }
}
export default Home;