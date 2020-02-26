import React from 'react';

class Products extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div className="card" >
                <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Title</h5>
                        <p className="card-text">Description</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
</div>
                )
            }
}

export default Products