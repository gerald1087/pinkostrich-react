import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div className="container valign-wrapper">
                <div className="row">
                    <div className="col s12 center-align">
                        <h4>
                            Welcome to PinkOstrich!
                        </h4>
                        <p className="flow-text grey-text text-darken-1">
                            Buy and sell your kicks!
                        </p>
                        <br />
                        <div className="col s6">
                            <Link to="/register" style={{ width: "140px", borderRadius: "3px", letterSpacing: "1.5px" }} className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                                Register
                            </Link>
                        </div>
                        <div className="col s6">
                            <Link to="/login" style={{ width: "140px", borderRadius: "3px", letterSpacing: "1.5px" }} className="btn btn-large btn-flat waves-effect white black-text">
                                Log In
                            </Link>
                        </div>
                        <div className="col s6">
                            <Link to="/users/:id" style={{ width: "140px", borderRadius: "3px", letterSpacing: "1.5px" }} className="btn btn-large btn-flat waves-effect white black-text">
                                Profile
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;