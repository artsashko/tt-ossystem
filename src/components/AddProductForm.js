import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    margin: 5,
  },
  addButton: {
    alignSelf: "flex-start",
  },
});

export function AddProductForm({ addProduct, getRole }) {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageName, setImageName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addProduct({
        id: + new Date(),
        title,
        imageUrl,
        description,
        price: price + '$',
      },
    );
  }

  const handleImageChange = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImageUrl(reader.result);
    }

    setImageName(e.target.files[0].name)
  };

  if (getRole === 'user') {
    return 'Sorry, You need to be admin to have access!'
  }

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
        <div className="form__row">
          <input
            accept="image/*"
            onChange={(event) => handleImageChange(event)}
            style={{display: 'none'}}
            id="contained-button-file"
            type="file"
            required
          />
          <label htmlFor="contained-button-file">
            <Button 
              variant="contained" 
              color="primary" 
              className={classes.root}
              component="span"
            >
              Upload
            </Button>
            {imageName ? imageName : 'Choose an image...'}
          </label>
        </div>
        <div className="form__row">
          <Button 
            variant="outlined" 
            color="primary"
            className={classes.root}
            type="submit"
          >
            Add product
          </Button>
        </div>
      </form>
    </>
  );
}
