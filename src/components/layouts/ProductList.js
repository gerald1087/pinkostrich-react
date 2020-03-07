import React from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'
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
        width: 400,
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

class ProductList extends React.Component {

    clickHandler() {
        this.props.history.push('/products/' + this.props.id)
    }

    render() {
        const { classes } = this.props;
        return (


            <div>
                <div>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardContent>
                                <img src={this.props.image} id="productimage" className="card-img-top" alt="..." />
                                <Typography variant="h5" component="h2">
                                    {this.props.name}
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    Description: {this.props.description}
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    Available Quantity: {this.props.available_quantity}
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    Price: ${this.props.price}
                                </Typography>
                            </CardContent>
                            <Button variant="outlined" color="secondary" type="submit" onClick={this.clickHandler.bind(this)} >
                                View
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

export default compose(withRouter, withStyles(useStyles))(ProductList)
