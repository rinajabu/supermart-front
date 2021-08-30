import React from 'react'
import './Read.css';

const Read = (props) => {
    return (
        <div className="product">
            <h4>Name: {props.product.name}</h4>
            <h4>Category: {props.product.category}</h4>
            <h4>Price: ${props.product.price}</h4>
            <h4>Description: {props.product.description}</h4>
            <img src={props.product.picture} alt={props.product.name} />
        </div>
    )
}

export default Read
