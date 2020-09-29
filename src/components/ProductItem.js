import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 245,
    height: 450,
  },
  price: {
    paddingTop: 15,
  },
});

export function ProductItem({ 
  id, 
  title, 
  imageUrl, 
  description, 
  price, 
  deleteProduct, 
  getRole }) {
  const classes = useStyles();

  return (
    <li className="products__item">
      {getRole !== 'user' && (<button 
      type="button"
      className="products__button-destroy"
      onClick={() => deleteProduct(id)}
      >
        x
      </button>)}
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={title}
            height="200"
            image={imageUrl}
            title={title}
          />
          <CardContent>
            <Typography 
              gutterBottom 
              variant="h5" 
              component="h2"
            >
              {title}
            </Typography>
            <Typography 
              variant="body2" 
              color="textSecondary" 
              component="p"
            >
              {description}
            </Typography>
            <Typography 
              variant="h5" 
              align="center" 
              component="p"
              className={classes.price}
            >
              {price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        </CardActions>
      </Card>
    </li>
  );
}
