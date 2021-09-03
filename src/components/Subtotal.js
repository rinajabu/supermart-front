import React from 'react';
import './Subtotal.css'
import CurrencyFormat from "react-currency-format";
import { useHistory } from 'react-router-dom';
import { cartTotal } from '../reducer';
import { useStateValue } from '../StateProvider';

const Subtotal = (props) => {

    const history = useHistory();
    const [{cart}, dispatch] = useStateValue();

    const buy = () => {
        dispatch({
            type: "BUY",
            cart: []
        })
        alert("Your order has been placed! Thanks for shopping at SuperMart!")
    }

    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => (
                    <div className="subtotal_total">
                        <span>Total ({cart.length} items): </span>
                        <span>{value}</span>
                    </div>
                )}
                decimalScale={2}
                value={cartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={buy}>Buy Items</button>
        </div>
    )
}

export default Subtotal
