import React from 'react'
import { Link } from 'react-router-dom';
import './Read.css';

const Read = (props) => {
    return (
        <div className="products">
            {props.products.map(product => {
                return (
                    <>
                        <div className="product">
                            <h4>Category: {product.category}</h4>
                            <h4>Name: {product.name}</h4>
                            <h4>Price: ${product.price}</h4>
                            <h4>Description: {product.description}</h4>
                            <img src={product.picture} alt={product.name} />
                        </div>
                        <div className="product_buttons">
                            <button
                                className="product_delete"
                                onClick={props.handleDelete}
                                value={product.id}
                            >
                                Delete
                            </button>
                            <Link to="/edit">
                            <button className="product_edit">
                                Edit
                            </button>
                            </Link>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default Read
