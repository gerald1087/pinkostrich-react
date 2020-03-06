import React from 'react'
import axios from 'axios'

class Cart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
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
<ul className="list-group">
  <li className="list-group-item"></li>
</ul>
</div>
        )
    }
}

export default Cart