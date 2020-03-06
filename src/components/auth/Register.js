import React, { Component } from "react";
import axios from 'axios'

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = (theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            address_line1: '',
            address_line2: '',
            city: '',
            state: '',
            zip: ''
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick(e) {
        e.preventDefault();
        var apiBaseUrl = "http://localhost:3001/api/";
        var payload = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            address_line1: this.state.address_line1,
            address_line2: this.state.address_line2,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        }
        console.log(payload)
        axios.post(apiBaseUrl + "register", payload)

            .then(response => {
                if (response.statusText === 'OK') {
                    this.props.handleSuccessfulRegistration(response.data)
                    alert('Registration Successful!')
                    window.location.reload()
                }
            }).catch(error => {
                console.log(error);
            });

        console.log("values", this.state.name, this.state.email, this.state.address_line1, this.state.password);
    }


    render() {

        const { classes } = this.props;
        return (
            <div>
                <form className={classes.root} noValidate autoComplete="off">
                    <div>
                        <TextField id="outlined-basic" label="Full Name" variant="outlined" name="name" type="name" className="form-control" value={this.state.name} onChange={this.handleChange} />
                    </div>

                    <div>
                        <TextField id="outlined-basic" label="Email Address" variant="outlined" name="email" type="email" className="form-control" value={this.state.email} onChange={this.handleChange} />
                    </div>

                    <div>
                        <TextField id="outlined-basic" label="Password" variant="outlined" name="password" type="password" className="form-control" value={this.state.password} onChange={this.handleChange} />
                    </div>

                    <div>
                        <TextField id="outlined-basic" label="Address Line 1" variant="outlined" name="address_line1" type="address" className="form-control" value={this.state.address_line1} onChange={this.handleChange} />
                    </div>

                    <div>
                        <TextField id="outlined-basic" label="Address Line 2" variant="outlined" name="address_line2" type="address" className="form-control" value={this.state.address_line2} onChange={this.handleChange} />
                    </div>

                    <div>
                        <TextField id="outlined-basic" label="City" variant="outlined" name="city" type="city" className="form-control" value={this.state.city} onChange={this.handleChange} />
                    </div>

                    <div>
                        <TextField id="outlined-basic" label="State" variant="outlined" name="state" type="state" className="form-control" value={this.state.state} onChange={this.handleChange} />
                    </div>

                    <div>
                        <TextField id="outlined-basic" label="Zip Code" variant="outlined" name="zip" type="zip" className="form-control" value={this.state.zip} onChange={this.handleChange} />
                    </div>
                    <br />
                    <div>
                        <Button variant="outlined" color="secondary" type="submit" onClick={(event) => this.handleClick(event)} >
                            Register
                    </Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withStyles(useStyles)(Register)