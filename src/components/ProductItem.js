import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    maxHeight: 500,
  },
  price: {
    paddingTop: 15,
  },
});

export function ProductItem({ 
  id, 
  title, 
  image, 
  description, 
  price, 
  deleteProduct, 
  getRole }) {
  const classes = useStyles();

  return (
    <li className="products__item">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={title}
            height="200"
            image={image}
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
        {getRole !== 'user' && (<Button 
          variant="contained" 
          color="secondary"
          type="button"
          className="destroy"
          size="small"
          onClick={() => deleteProduct(id)}
        >
          x
        </Button>)}
        </CardActions>
      </Card>
    </li>
  );
}
