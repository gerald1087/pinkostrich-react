import React from 'react';
import axios from 'axios'
import Header from "./Header"
import history from './history';
import Footer from "./Footer"
import Button from '@material-ui/core/Button';


class SellProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            category: '',
            price: 0,
            description: '',
            available_quantity: 0,
            image: '',
        }
    }

    handleClick(e) {
        e.preventDefault();
        var apiBaseUrl = "http://localhost:3001/api/";
        var payload = {
            "name": this.state.name,
            "category": this.state.category,
            "price": this.state.price,
            "description": this.state.description,
            "available_quantity": this.state.available_quantity,
            "image": this.state.image,
        }
        axios.post(apiBaseUrl + "products", payload)
            .then(function (data) {
                console.log(data);
                alert('Listing Created! Hit Go Back')
                    window.location.reload()
            }).catch(function (error) {
                console.log(error);
            });
            console.log("values", this.state.name);
            
        }

    render() {
        return (
            <div>
            <Header>

            </Header>
               <div className="pic">
            <img src="https://lh3.googleusercontent.com/proxy/oB6eVEPsQHzLpY0bn8LaXrhvcM7yv2BOB7NwRaQjZjCTUQvRli4cmJucwHhEZT5P2-2MJRki13rTcgnsJvsucGlgNsEoZV0ykz_1FH0FRNnTEkXRADXrvBqU3du6jg"
                align="center" height="100" width="100" alt="Wild Ostrich"/>
            </div>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input name="name" type="name" className="form-control" aria-describedby="emailHelp" onChange={(event) => this.setState({ name: event.target.value })} />
                        
                    </div>
                    <div className="form-group">
                        <label >Category</label>
                        <input name="category" type="category" className="form-control" aria-describedby="emailHelp" onChange={(event) => this.setState({ category: event.target.value })}/>
                        
                    </div>
                    <div className="form-group">
                        <label >Price</label>
                        <input name="price" type="" className="form-control" aria-describedby="emailHelp" onChange={(event) => this.setState({ price: event.target.value })}/>
                        
                    </div>
                    <div className="form-group">
                        <label >Description</label>
                        <input name="description" type="" className="form-control" aria-describedby="emailHelp" onChange={(event) => this.setState({ description: event.target.value })}/>
                        
                    </div>
                    <div className="form-group">
                        <label >Available Quantity</label>
                        <input name="quantity" type="address" className="form-control" aria-describedby="emailHelp" onChange={(event) => this.setState({ available_quantity: event.target.value })}/>
                        
                    </div>
                    <div className="form-group">
                        <label >Image</label>
                        <input name="image" type="url" className="form-control" aria-describedby="emailHelp" onChange={(event) => this.setState({ image: event.target.value })}/>
                        </div>
                    <button type="submit" onClick={(event) => this.handleClick(event)} className="btn btn-primary">Submit</button>
                </form>
                <Button size="small"onClick={() => history.push('/products')}>Go Back</Button>
           <Footer></Footer>
            </div>
        )
    }
}

export default SellProduct