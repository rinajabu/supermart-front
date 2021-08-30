import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Read from './components/Read';

const App = () => {

    let [products, setProducts] = useState([]);

    const getProducts = () => {
        axios
            .get('https://supermart-back.herokuapp.com/api/products')
            .then(
                (response) => setProducts(response.data),
                (err) => console.error(err)
            )
            .catch((error) => console.error(error))
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div>
              <h1>Supermart</h1>
              <div className="products">
                  {products.map(product => {
                      return (
                          <Read product={product} />
                      )
                  })}
              </div>
        </div>
    )
}

export default App

