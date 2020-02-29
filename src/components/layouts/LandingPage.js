import React from 'react'; 
import { Link } from "react-router-dom";

class LandingPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        email:'',
        loggedIn: true
        }
    }

    render() {
        return (
            <div>
                <h1>Welcome to PinkOstrich</h1>
                <h4>What would like to do?</h4>
                <div className="col s6">
                            <Link to="/sellproduct" style={{ width: "140px", borderRadius: "3px", letterSpacing: "1.5px" }} className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                                Sell
                            </Link>
                        </div>
                        <div className="col s6">
                            <Link to="/products" style={{ width: "140px", borderRadius: "3px", letterSpacing: "1.5px" }} className="btn btn-large btn-flat waves-effect white black-text">
                                Buy
                            </Link>
                            </div>
            </div>

        )
    }
}

export default LandingPage;