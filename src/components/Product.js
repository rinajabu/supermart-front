import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider';

const Product = (props) => {

    const [{cart}, dispatch] = useStateValue();

    const addToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            item: { ...props.product
                // id: props.product.id,
                // category: props.product.category,
                // name: props.product.name,
                // price: props.product.price,
                // description: props.product.description,
                // picture: props.product.picture
            }
        })
    }

    return (
        <>
            <div className="product">
                <h4>ID: {props.product.id}</h4> {/* DELETE ME WHEN DONE */}
                <h4>Category: {props.product.category}</h4>
                <h4>Name: {props.product.name}</h4>
                <h4>Price: ${props.product.price}</h4>
                <h4>Description: {props.product.description}</h4>
                <img src={props.product.picture} alt={props.product.name} />
            </div>
            <div className="product_buttons">
                <button
                    className="product_delete"
                    onClick={props.handleDelete}
                    value={props.product.id}
                >
                    Delete
                </button>
                <Link 
                    to={{
                        pathname: "/edit/" + props.product.id,
                        state: props.product
                    }}
                >
                <button className="product_edit">
                    Edit
                </button>
                </Link>
                <button onClick={addToCart}>Add to Cart</button>
            </div>
        </>
    )
}

export default Product
