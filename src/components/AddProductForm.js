import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    margin: 5,
  },
});

export function AddProductForm({ products, setProducts }) {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setProducts([
      {
        id: products.length + 1,
        title,
        image,
        description,
        price: price + '$',
      },
      ...products,
    ]);
  }

  const handleImageChange = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImage(reader.result);
    }
  };

  return (
    <>
      <h1>Add product form</h1>

      <form onSubmit={handleSubmit} className="form">
        <div className="form__row">
          <TextField
            name="title"
            onChange={(event) => setTitle(event.target.value)}
            value={title.trimLeft()}
            className={`${classes.root} form__item_title`}
            id="outlined-required"
            label="title"
            variant="outlined"
            multiline
            required
          />
          <TextField
            type="number"
            name="price"
            onChange={(event) => setPrice(event.target.value)}
            value={price.trimLeft()}
            className={`${classes.root} form__item_price`}
            id="outlined-required"
            label="price, $"
            variant="outlined"
            required
          />
        </div>
        <TextField
          name="description"
          onChange={(event) => setDescription(event.target.value)}
          value={description.trimLeft()}
          className={classes.root}
          id="outlined-required"
          label="description"
          variant="outlined"
          multiline
          required
        />
        <input
          accept="image/*"
          onChange={(event) => handleImageChange(event)}
          style={{display: 'none'}}
          id="contained-button-file"
          type="file"
        />
        <label htmlFor="contained-button-file">
          <Button 
            variant="contained" 
            color="primary" 
            className={classes.root}
            component="span"
          >
            Upload image
          </Button>
        </label>
        <Button 
          variant="outlined" 
          color="primary"
          className={classes.root}
          type="submit"
        >
          Add product
        </Button>
      </form>
    </>
  );
}
