import React from 'react';
import axios from 'axios';

class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        
        let productId = this.props.match.params.id
        axios.get("http://localhost:3001/api/products/" + productId)
            .then(({ data }) => {
                this.setState(data);
            });
    }

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-4">{this.state.name}</h1>
        <p className="lead">{this.state.description}</p>
                    <hr className="my-4" />
        <p>{this.state.price}</p>
                        {/* <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a> */}
                </div>
            </div>
                )
            }
}

export default Product