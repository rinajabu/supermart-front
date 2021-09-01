import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import './Create.css'

const Create = (props) => {

    const history = useHistory();

    let emptyProduct = { category: 'Meat', name: '', price: 0, description: '', picture: '' };
    const [product, setProduct] = useState(emptyProduct);

    const handleChange = (event) => {
        setProduct({...product, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleCreate(product);
        console.log(product); // DELETE WHEN DONE
        setProduct(emptyProduct);
        event.target.reset();
        history.push('/'); // redirects back to home page
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
                <input type="submit" value="Create" />
            </form>
        </div>
    )
}

export default Create
