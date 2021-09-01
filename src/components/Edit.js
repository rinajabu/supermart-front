import React, { useState } from 'react'
import { useLocation } from 'react-router';
import { useHistory } from 'react-router-dom';
import './Edit.css'

const Edit = (props) => {

    const data = useLocation();
    const history = useHistory();

    const [editProduct, setEditProduct] = useState({...data.state});

    const handleChange = (event) => {
        setEditProduct({...editProduct, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleUpdate(editProduct);
        console.log(editProduct); // DELETE THIS WHEN DONE
        history.push("/"); // redirects back to home page
    }

    return (
        <div>
            <h1>Edit Product</h1>
            <form className="edit_form" onSubmit={handleSubmit}>
                <label htmlFor="category">Category</label>
                <select onChange={handleChange} name="category" defaultValue={editProduct.category}>
                    <option value='Meat'>Meat</option>
                    <option value='Fruits'>Fruits</option>
                    <option value='Vegetables'>Vegetables</option>
                    <option value='Seafood'>Seafood</option>
                    <option value='Dairy'>Dairy</option>
                    <option value='Bread'>Bread</option>
                </select>
                <br />
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" onChange={handleChange} defaultValue={editProduct.name} required />
                <br />
                <label htmlFor="price">Price: </label>
                <input type="number" name="price" onChange={handleChange} defaultValue={editProduct.price} required />
                <br />
                <label htmlFor="description">Description: </label>
                <input type="text" name="description" onChange={handleChange} defaultValue={editProduct.description} required />
                <br />
                <label htmlFor="picture">Product Picture: </label>
                <input type="url" name="picture" onChange={handleChange} defaultValue={editProduct.picture} required />
                <div>Picture Preview: </div>
                <img src={editProduct.picture} />
                <br />
                <input type="submit" value="Edit" />
            </form>
        </div>
    )
}

export default Edit
