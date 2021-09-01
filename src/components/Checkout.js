import React from 'react'
import { useStateValue } from '../StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

const Checkout = (props) => {

    const [{cart}, dispatch] = useStateValue()

    return (
        <div className="checkout">
            <div className="checkout_products">
                <CheckoutProduct />
            </div>
            <div className="checkout_subtotal">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
