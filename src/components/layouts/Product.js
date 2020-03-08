import React from 'react';
import axios from 'axios';

import Header from "./Header"
import Footer from "./Footer"

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import "./ProductList.css"

const useStyles = (theme => ({

    root: {
        background: "#F5C3C2",
        width: 500,
        height: 500,
        color: "#E73895"
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));

class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    handleClick(e) {
        e.preventDefault()
        var apiBaseUrl = "http://localhost:3001/api/";
        var payload = {
            user_id: this.props.user.id,
            order_date: this.state.order_date,
            order_status: this.state.order_status
        }
        console.log(payload)
        axios.post(apiBaseUrl + 'orders', payload)
            .then(response => {
                alert('Order Successful!')
                // window.location = '/products'
            }).catch(error => {
                console.log(error);
            });
    }

    componentDidMount() {

        let productId = this.props.match.params.id
        axios.get("http://localhost:3001/api/products/" + productId)
            .then(({ data }) => {
                this.setState(data);
            });
    }

    render() {

        const { classes } = this.props;
        return (


            <div>
                <header>
                    <Header />
                </header>
                <div>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardContent>
                                <img src={this.state.image} id="productimage" className="card-img-top" alt="..." />
                                <Typography variant="h5" component="h2">
                                    {this.state.name}
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    Description: {this.state.description}
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    Available Quantity: {this.state.available_quantity}
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    Price: ${this.state.price}
                                </Typography>
                            </CardContent>
                            <Button variant="outlined" color="secondary" type="submit" onClick={(event) => this.handleClick(event)} >
                                Buy Now!
                        </Button>
                        </CardActionArea>
                    </Card>
                </div>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}

export default withStyles(useStyles)(Product)