import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions/product';
import Button from '../components/Button';

import '../css/Product.css';
import '../App.css';

const imageBaseUrl = 'https://backendapi.turing.com/images/products/';

class Product extends Component {

    state = {
        hover: false,
        productId: 0
    }

    componentWillMount() {
        this.props.fetchProducts();   
    }

    toggleHover = (product_id) => {
        this.setState({
            hover: !this.state.hover,
            productId: product_id
        })
    }

    render() {

        if(!this.props.products) {
            return <div>Loading...</div>
        }
                
        
        const productArray = Object.values(this.props.products.rows);
        //console.log('The product array: ', productArray);

        return (
            <React.Fragment>    
                <div className="container-fluid p-3">
                    <div className="row">
                        <div className="col-md-9 row">
                            {
                                productArray.map(product => {
                                    { 
                                        if(this.state.hover || this.state.productId == product.product_id) {
                                            return (<div className="col-md-3 productDiv" onMouseEnter={() => this.toggleHover(product.product_id)} onMouseLeave={() => this.toggleHover()} style={{ cursor: 'pointer' }}>
                                                <div className="card">
                                                    <div className="card-body">
                                                        <p className="card-title text-center productTitle">{product.name}</p>
                                                        <p className="card-text text-center textPink">${product.price}</p>
                                                        <p className="text-center"><Button buttonText = "Add to cart"/></p>
                                                    </div>
                                                </div>
                                            </div>)

                                        } 
                                        return (
                                            <div className="col-md-3 productDiv" onMouseEnter={() => this.toggleHover()} onMouseLeave={() => this.toggleHover()} style={{ cursor: 'pointer' }}>
                                                <div className="card">
                                                    <img src={imageBaseUrl + product.thumbnail} className="card-img-top img-responsive" alt={product.name} />
                                                    <div className="card-body">
                                                        <p className="card-title text-center productTitle">{product.name}</p>
                                                        <p className="card-text text-center textPink">${product.price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ) 
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return { products: state.products.allProducts}
}

export default connect(mapStateToProps, actions)(Product);