import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Read from './components/Read';
import Create from './components/Create';
import Header from './components/Header';

const App = () => {

    let [products, setProducts] = useState([]);

    // const getProducts = () => {
    //     axios
    //         .get('https://supermart-back.herokuapp.com/api/products')
    //         .then(
    //             (response) => setProducts(response.data),
    //             (err) => console.error(err)
    //         )
    //         .catch((error) => console.error(error))
    // }

    const getProducts = async () => {
        let response = await axios('https://supermart-back.herokuapp.com/api/products');
        let results = await response.data;
        setProducts(results);
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
                      <Create />
                  </Route>
                  <Route path="/">
                      <Header />
                      <Read products={products} />
                  </Route>
              </Switch>
          </div>
      </Router>
    )
}

export default App

