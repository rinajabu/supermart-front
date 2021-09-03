import React from 'react'
import { useStateValue } from '../StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

const Checkout = (props) => {

    const [{cart}, dispatch] = useStateValue()

    return (
        <>
            <div className="checkout" id="checkout_top">
                <div className="checkout_products">
                    <h3>Your Cart Items</h3>
                    { cart.length === 0 &&
                        <p className="checkout_empty">Cart Is Empty...</p>
                    }
                    { cart.map(item => (
                        <CheckoutProduct item={item} />
                    ))}
                </div>
                <div className="checkout_subtotal">
                    <Subtotal />
                </div>
            </div>
            <a className="checkout_backToTop" href="#checkout_top">Back to Top</a>
        </>
    )
}

export default Checkout
