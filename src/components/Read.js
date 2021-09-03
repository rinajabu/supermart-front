import React from 'react'
import Product from './Product';
import './Read.css';

const Read = (props) => {

    return (
        <>
            <div className="products" id="product_top">
                { props.filterBy === 'All' && props.products.sort((a, b) => (a.id > b.id) ? -1 : 1).map(product => {
                    return (
                        <Product product={product} handleDelete={props.handleDelete} />
                    )
                })}
                { props.products.filter(products => products.category === props.filterBy).map((product) => {
                    return (
                        <Product product={product} handleDelete={props.handleDelete} />
                    )
                })}
            </div>
            <a className="products_backToTop" href="#product_top">Back to Top</a>
        </>
    )
}

export default Read
