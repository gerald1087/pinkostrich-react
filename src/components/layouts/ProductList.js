import React from 'react'
import { withRouter } from 'react-router-dom'

class ProductList extends React.Component {

    clickHandler() {
        this.props.history.push('/products/' + this.props.id)
    }

    render() {
        return (
            <div className="card" >
            {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-body">
        <h5 className="card-title">{this.props.name}</h5>
        <p className="card-text">{this.props.description}</p>
        <p className="card-text">{this.props.available_quantity}</p>
        <p className="card-text">{this.props.price}</p>
        <button type="submit" onClick={this.clickHandler.bind(this)} className="btn btn-primary">Submit</button>
                </div>
</div>
        )
    }
}

export default withRouter(ProductList);