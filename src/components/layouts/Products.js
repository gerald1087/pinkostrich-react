import React from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import Product from './Product';
import Header from "./Header"

import { Switch, Route } from 'react-router-dom'


class Products extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3001/api/products")
        .then(({ data }) => {
            console.log(data)
          this.setState(
              {products: data
          });
        });
    }

    render() {
        let productsJSX = this.state.products.map((product, index) => {

            return <ProductList key={index} {...product} user={this.state.user} />
        });

        return(
            <div>
                <header>
                    <Header/>
                </header>
                <div className="Product">
                    
                    <Switch>
                        <Route exact path={'/products'} render={ () => productsJSX }/>
                        <Route path={'/products/:id'} render={props => (<Product {...props} user={this.state.user}/>)} />
                    </Switch>
         

                </div>
            </div>
        )
}
}

export default Products