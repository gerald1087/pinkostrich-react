import React from 'react'
import axios from 'axios'

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            is_admin: '',
            address_line1: '',
            address_line2: '',
            city: '',
            state: '',
            zip: '',
        }
    }

    handleClick(e) {
        e.preventDefault();
        var apiBaseUrl = "http://localhost:3001/api/";
        var payload = {
            "name": this.state.name,
            "email": this.state.email,
            "password": this.state.password,
            "address_line1": this.state.address_line1,
            "address_line2": this.state.address_line2,
            "city": this.state.city,
            "state": this.state.state,
            "zip": this.state.zip
        }
        axios.post(apiBaseUrl + "register", payload)
            .then(function (data) {
                console.log(data);
            }).catch(function (error) {
                console.log(error);
            });
            console.log("values", this.state.name, this.state.email, this.state.address_line1, this.state.password);
    }


    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input name="name" type="name" className="form-control" aria-describedby="emailHelp" onChange={(event, newValue) => this.setState({ name: newValue })} />
                        
                    </div>
                    <div className="form-group">
                        <label >Email address</label>
                        <input name="email" type="email" className="form-control" aria-describedby="emailHelp" onChange={(event, newValue) => this.setState({ email: newValue })}/>
                        
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input name="password" type="password" className="form-control" aria-describedby="emailHelp" onChange={(event, newValue) => this.setState({ password: newValue })}/>
                        
                    </div>
                    <div className="form-group">
                        <label >Address Line 1</label>
                        <input name="address_line1" type="address" className="form-control" aria-describedby="emailHelp" onChange={(event, newValue) => this.setState({ address_line1: newValue })}/>
                        
                    </div>
                    <div className="form-group">
                        <label >Address Line 2</label>
                        <input name="address_line2" type="address" className="form-control" aria-describedby="emailHelp" onChange={(event, newValue) => this.setState({ address_line2: newValue })}/>
                        
                    </div>
                    <div className="form-group">
                        <label >City</label>
                        <input name="city" type="city" className="form-control" aria-describedby="emailHelp" onChange={(event, newValue) => this.setState({ city: newValue })}/>
                        
                    </div>
                    <div className="form-group">
                        <label >State</label>
                        <input name="state" type="state" className="form-control" aria-describedby="emailHelp" onChange={(event, newValue) => this.setState({ state: newValue })}/>
                        
                    </div>
                    <div className="form-group">
                        <label >Zip</label>
                        <input name="zip" type="zip" className="form-control" aria-describedby="emailHelp" onChange={(event, newValue) => this.setState({ zip: newValue })}/>
                        
                    </div>
                    <button type="submit" onClick={(event) => this.handleClick(event)} className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Register