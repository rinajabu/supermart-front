import React from 'react'
import { useStateValue } from '../StateProvider';

import './CheckoutProduct.css'

const CheckoutProduct = (props) => {

    const [{cart}, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: props.item.id
        })
    }

    return (
        <div className="checkoutProduct">
            <img src={props.item.picture} />
            <p className="checkoutProduct_category">Category: {props.item.category}</p>
            <p className="checkoutProduct_name">Name: {props.item.name}</p>
            <p className="checkoutProduct_price">${props.item.price}</p>
            <button onClick={removeFromCart}>Remove from Cart</button>
        </div>
    )
}

export default CheckoutProduct
