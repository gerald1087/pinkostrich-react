import React, { Component } from "react";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Footer from "./Footer"

import "./Home.css"

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
                <div className="title">
                    <h1>PinkOstrich.com</h1>
                    <h4>The baloon emporium!</h4>
                    <br />
                    <br />
                </div>
                {/* <h1>Status: {this.props.loggedIn}</h1> */}
                <div className="register">
                    <h3>Register</h3>
                    <Register handleSuccessfulRegistration={this.handleSuccessfulRegistration} />
                </div>
                {/* <img className="image" src={"https://p7.hiclipart.com/preview/305/852/1001/common-ostrich-bird-animal-ostrich-thumbnail.jpg"} alt="could not load"/> */}
                <div className="login">
                    <h3>Login</h3>
                    <Login handleSuccessfulLogin={this.handleSuccessfulLogin} />
                </div>
                <footer>
                    <Footer />
                </footer>
            </div>
        );
    }
}
export default Home;