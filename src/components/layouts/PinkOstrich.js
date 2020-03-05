import React from 'react';
import Header from "./Header"

class PinkOstrich extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            user: this.user
        }
    }

    clickHandler() {
        this.props.history.push('/profile')
    }

    render() {
        return(
            <div>
                <header>
                    <Header/>
                </header>
                <h1>Hey {this.props.user.name}!</h1>
                <h4>Welcome to PinkOstrich, the balloon emporium...</h4>
                <h4>Status: {this.props.loggedIn}</h4>
                <button type="submit" onClick={this.clickHandler.bind(this)} className="btn btn-primary">Profile</button>
            </div>
        )
    }
}


export default PinkOstrich;