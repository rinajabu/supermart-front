import React, { useState } from 'react'
import './Create.css'

const Create = (props) => {

    let emptyProduct = { category: 'Meat', name: '', price: 0, description: '', picture: '' };
    const [product, setProduct] = useState(emptyProduct);

    const handleChange = (event) => {
        setProduct({...product, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleCreate(product);
        console.log(product);
        setProduct(emptyProduct);
        event.target.reset();
    }

    return (
        <div className="create">
            <h1>Add New Product</h1>
            <form className="create_form" onSubmit={handleSubmit}>
                <label htmlFor="category">Category</label>
                <select onChange={handleChange} name="category" defaultValue={product.category}>
                    <option value='Meat'>Meat</option>
                    <option value='Fruits'>Fruits</option>
                    <option value='Vegetables'>Vegetables</option>
                    <option value='Seafood'>Seafood</option>
                    <option value='Dairy'>Dairy</option>
                    <option value='Bread'>Bread</option>
                </select>
                <br />
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" onChange={handleChange} required />
                <br />
                <label htmlFor="price">Price: </label>
                <input type="number" name="price" onChange={handleChange} required />
                <br />
                <label htmlFor="description">Description: </label>
                <input type="text" name="description" onChange={handleChange} required />
                <br />
                <label htmlFor="picture">Product Picture: </label>
                <input type="url" name="picture" onChange={handleChange} required />
                <div>Picture Preview: </div>
                <img src={product.picture} />
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Create
