import React from 'react';
import Header from "./Header"
import Footer from "./Footer"

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
});

class PinkOstrich extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: this.user
        }
    }

    profileClickHandler() {
        this.props.history.push('/profile')
    }

    shopClickHandler() {
        this.props.history.push('/products')
    }

    render() {
        return (
            <div>
                <header>
                    <Header />
                </header>
                <h1>Welcome, {this.props.user.name}!</h1>
                <h4>Buy something!</h4>
                {/* <h4>Status: {this.props.loggedIn}</h4> */}
                <div>
                    <Button variant="outlined" color="secondary" type="submit" onClick={this.profileClickHandler.bind(this)} >
                        Profile
                        </Button>
                </div>
                <div>
                    <Button variant="outlined" color="secondary" type="submit" onClick={this.shopClickHandler.bind(this)} >
                        Shop
                        </Button>
                </div>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}


export default withStyles(useStyles)(PinkOstrich)