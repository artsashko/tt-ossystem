import React,
  { useState,
    useEffect, 
    useMemo, 
    useCallback } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import logo from './logo.png';
import { ProductsList } from './components/ProductsList';
import { AddProductForm } from './components/AddProductForm';
import data from './api/products.json';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './App.scss';

function App() {
  const [products, setProducts] = useState(data);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const sumOfProductsPrice = useMemo(() => { 
    return products 
      ? products.reduce((sum, product) => sum += parseInt(product.price), 0)
      : 0
  }, [products]);

  const deleteProduct = useCallback(
    (productId) => {
      setProducts(products.filter(product => product.id !== productId));
    }, [products]);

  const clearProducts = useCallback(
    () => {
      setProducts(null);
    }, []);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('products'))) {
      setProducts(JSON.parse(localStorage.getItem('products')));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  return (
    <div className="page">
      <header className="header">
        <div className="header__container">
          <img src={logo} alt="logo" />
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            Menu
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
              <MenuItem onClick={handleClose}>
                <Link to="/catalog">
                  Catalog
                </Link>
              </MenuItem>
            <Link to="/addform" >
              <MenuItem onClick={handleClose}>Add form</MenuItem>
            </Link>
          </Menu>
        </div>
      </header>

      <main className="main">
        <Paper elevation={1} className="info-block main__info-block">
          <p>
            {useMemo(() => { 
              return products 
                ? products.length
                : 'No';
            }, [products])}
            {` products in catalog`}
          </p>
          <p>
            {`Sum of prices - `}
            {sumOfProductsPrice}
            $
          </p>
          <p>
            {`Average price - `}
          {useMemo(() => { 
              return products 
                ? (sumOfProductsPrice / products.length).toFixed(2)
                : '0';
            }, [sumOfProductsPrice, products])}
            $
          </p>
          <Button 
            variant="contained" 
            color="secondary"
            type="button"
            className="destroy"
            onClick={clearProducts}
          >
            Delete all
          </Button>
        </Paper>

        <Switch>
          <Route path="/catalog" render={() => (
            <div className="products">
              <h1>Catalog</h1>
              <ProductsList 
                products={products}
                deleteProduct={deleteProduct}
              />
            </div>
          )} />
          <Route path="/addform" render={() => (
            <AddProductForm 
              products={products}
              setProducts={setProducts}
            />
          )} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
