import React from 'react'
import "./Product.css"
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const Product = (props) => {

    const [{cart}, dispatch] = useStateValue();

    const addToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            item: { ...props.product }
        })
    }

    return (
        <div className="product">
            {/* <h4>ID: {props.product.id}</h4> */}
            <h4>Category: {props.product.category}</h4>
            <h4>{props.product.name}</h4>
            <h4>${props.product.price}</h4>
            <h4>{props.product.description}</h4>
            <img src={props.product.picture} alt={props.product.name} />
            <div className="product_buttons">
                <button className="product_delete btn btn-dark btn-sm" onClick={props.handleDelete} value={props.product.id}>
                    &#10060;
                </button>
                <Link 
                    to={{
                        pathname: "/edit/" + props.product.id,
                        state: props.product
                    }}
                >
                <button className="product_edit btn btn-warning btn-sm">
                    <EditIcon />
                </button>
                </Link>
                <button className="btn btn-success btn-sm" onClick={addToCart}>
                    <AddShoppingCartIcon />
                </button>
            </div>
        </div>
    )
}

export default Product
