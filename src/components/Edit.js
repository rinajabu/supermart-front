import React, { useState } from 'react'
import { useLocation } from 'react-router';
import { useHistory } from 'react-router-dom';
import './Edit.css'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

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
        <div className="edit">
            <h1>Edit Product</h1>
            <Form className="edit_form" onSubmit={handleSubmit}>

                <FloatingLabel htmlFor="category" label="Category" className="mb-3">
                    <Form.Select onChange={handleChange} name="category" defaultValue={editProduct.category}>
                        <option value='Meat'>Meat</option>
                        <option value='Fruits'>Fruits</option>
                        <option value='Vegetables'>Vegetables</option>
                        <option value='Seafood'>Seafood</option>
                        <option value='Dairy'>Dairy</option>
                        <option value='Bread'>Bread</option>
                    </Form.Select>
                </FloatingLabel>

                <FloatingLabel label="Name" className="mb-3" htmlFor="name">
                    <Form.Control type="text" name="name" onChange={handleChange} defaultValue={editProduct.name} required />
                </FloatingLabel>

                <FloatingLabel label="Price" className="mb-3" htmlFor="price"> 
                    <Form.Control type="number" name="price" onChange={handleChange} defaultValue={editProduct.price} required />
                </FloatingLabel>

                <FloatingLabel label="Description" className="mb-3" htmlFor="description"> 
                    <Form.Control type="text" name="description" onChange={handleChange} defaultValue={editProduct.description} required />
                </FloatingLabel>

                <FloatingLabel label="Product Picture URL" className="mb-3" htmlFor="picture"> 
                    <Form.Control type="url" name="picture" onChange={handleChange} defaultValue={editProduct.picture} required />
                </FloatingLabel>

                <div>Picture Preview</div>
                <img src={editProduct.picture} />
                <br />
                <input type="submit" className="btn btn-warning" value="Edit" />

            </Form>
        </div>
    )
}

export default Edit
