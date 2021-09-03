import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import './Create.css'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

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
            <Form className="create_form" onSubmit={handleSubmit}>
            
                <FloatingLabel htmlFor="category" label="Category" className="mb-3">
                    <Form.Select onChange={handleChange} name="category" defaultValue={product.category}>
                        <option value='Meat'>Meat</option>
                        <option value='Fruits'>Fruits</option>
                        <option value='Vegetables'>Vegetables</option>
                        <option value='Seafood'>Seafood</option>
                        <option value='Dairy'>Dairy</option>
                        <option value='Bread'>Bread</option>
                    </Form.Select>
                </FloatingLabel>

                <FloatingLabel label="Name" className="mb-3" htmlFor="name">
                    <Form.Control type="text" name="name" onChange={handleChange} required />
                </FloatingLabel>

                <FloatingLabel label="Price" className="mb-3" htmlFor="price"> 
                    <Form.Control type="number" name="price" onChange={handleChange} required />
                </FloatingLabel>

                <FloatingLabel label="Description" className="mb-3" htmlFor="description"> 
                    <Form.Control type="text" name="description" onChange={handleChange} required />
                </FloatingLabel>

                <FloatingLabel label="Product Picture URL" className="mb-3" htmlFor="picture"> 
                    <Form.Control type="url" name="picture" onChange={handleChange} required />
                </FloatingLabel>

                <div>Picture Preview</div>
                <br />
                <img src={product.picture} />
                <br/>
                <input type="submit" className="btn btn-primary" value="Create" />
            </Form>
        </div>
    )
}

export default Create
