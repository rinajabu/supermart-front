import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Read from './components/Read';
import Create from './components/Create';
import Header from './components/Header';
import Edit from './components/Edit';

const App = () => {

    let [products, setProducts] = useState([]);

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
              <Switch>
                  <Route path="/create">
                      <Header />
                      <Create handleCreate={handleCreate} />
                  </Route>
                  <Route path="/edit">
                      <Header />
                      <Edit />
                  </Route>
                  <Route path="/">
                      <Header />
                      <Read 
                          handleDelete={handleDelete} 
                          products={products} 
                      />
                  </Route>
              </Switch>
          </div>
      </Router>
    )
}

export default App

