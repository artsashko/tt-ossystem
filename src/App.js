import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Link, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearProducts, 
  addProduct, 
  deleteProduct } from './products';
  import { getProducts,
    getRole,
    getSumOfPrices, 
    getProductsCount } from './store';
import { ProductsList } from './components/ProductsList';
import { AddProductForm } from './components/AddProductForm';
import { InfoBlock } from './components/InfoBlock';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './App.scss';
import logo from './logo.png';

const getData = state => ({
  products: getProducts(state),
  getRole: getRole(state),
  getSumOfPrices: getSumOfPrices(state),
  getProductsCount: getProductsCount(state),
});

const getMethods = dispatch => ({
  clearProducts: () => dispatch(clearProducts()),
  addProduct: (value) => dispatch(addProduct(value)),
  deleteProduct: (value) => dispatch(deleteProduct(value)),
});

const ConnectedProductsList = connect(getData, getMethods)(ProductsList);
const ConnectedInfoBlock = connect(getData, getMethods)(InfoBlock);
const ConnectedAddProductForm = connect(getData, getMethods)(AddProductForm);


function App({ getRole, setRole }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="page">
      <header className="header">
        <div className="header__container">
          <Link to="/" className="header__link">
          <img 
            src={logo} 
            alt="logo" 
            className="header__logo"
          />
          </Link>
          <Button 
            aria-controls="simple-menu" 
            aria-haspopup="true" 
            onClick={handleClick}
          >
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
              <Link to="/tt-ossystem/catalog" className="header__link">
                Catalog
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/tt-ossystem/addform" className="header__link">
                Add form
              </Link>
            </MenuItem>
          </Menu>
        </div>
      </header>

      <main className="main">
        <ConnectedInfoBlock />
        <FormControl variant="outlined" >
        <InputLabel id="demo-simple-select-outlined-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={getRole}
          onChange={event => setRole(event.target.value)}
          label="role"
        >
          <MenuItem value={'user'}>User</MenuItem>
          <MenuItem value={'admin'}>Admin</MenuItem>
        </Select>
      </FormControl>
        <Switch>
          <Route path="/tt-ossystem/catalog" exact component={ConnectedProductsList} />
          <Route path="/tt-ossystem/addform" exact component={ConnectedAddProductForm} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
