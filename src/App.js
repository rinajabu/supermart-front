import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Read from './components/Read';
import Create from './components/Create';
import Header from './components/Header';
import Edit from './components/Edit';
import Filter from './components/Filter';
import Checkout from './components/Checkout';

const App = () => {

    let [products, setProducts] = useState([]);
    const [filterBy, setFilterby] = useState('All');

    const handleCreate = async (addProduct) => {
        try {
            let response = await axios.post('https://supermart-back.herokuapp.com/api/products', addProduct);
            console.log(response); // DELETE WHEN DONE
            getProducts();
        } catch (error) {
            console.log(error);
        }
    }

    const handleDelete = async (event) => {
        try {
            let response = await axios.delete(`https://supermart-back.herokuapp.com/api/products/${event.target.value}`);
            getProducts();
        } catch (error) {
            console.log(error);
        }
    }

    const handleUpdate = async (editProduct) => {
        try {
            let response = await axios.put(`https://supermart-back.herokuapp.com/api/products/${editProduct.id}`, editProduct);
            getProducts();
        } catch (error) {
            console.log(error);
        }
    }

    const updateFilter = (event) => {
        setFilterby(event.target.value);
    }

    const getProducts = async () => {
        try {
            let response = await axios.get('https://supermart-back.herokuapp.com/api/products');
            setProducts(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
      <Router>
            <div className="app">
                <Header />
                <Switch>
                    <Route path="/create">
                        <Create handleCreate={handleCreate} />
                    </Route>
                    <Route path='/checkout'>
                        <Checkout />
                    </Route>
                    <Route path="/edit/:id">
                        <Edit 
                            handleUpdate={handleUpdate}
                        />
                    </Route>
                    <Route path="/">
                        <Filter 
                            filterBy={filterBy}
                            updateFilter={updateFilter}
                        />
                        <Read
                            handleDelete={handleDelete} 
                            products={products}
                            filterBy={filterBy} 
                        />
                    </Route>
                </Switch>
            </div>
      </Router>
    )
}

export default App



