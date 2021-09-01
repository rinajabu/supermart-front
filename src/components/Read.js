import React from 'react'
import { Link } from 'react-router-dom';
import Edit from './Edit';
import './Read.css';

const Read = (props) => {

    return (
        <div className="products">
            {props.products.sort((a, b) => (a.id > b.id) ? -1 : 1).map(product => {
                return (
                    <>
                        <div className="product">
                            <h4>ID: {product.id}</h4> {/* DELETE ME WHEN DONE */}
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
                            <Link 
                                to={{
                                    pathname: "/edit/" + product.id,
                                    state: product
                                }}
                            >
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
