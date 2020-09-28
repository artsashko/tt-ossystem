import React  from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  infoBlock: {
    backgroundColor: "black",
    color: "white",
  },
});

export const InfoBlock = ({ 
  products,
  clearProducts,
  getSumOfPrices,
  getProductsCount,
  getRole }) => {
  const classes = useStyles();
  const getAveragePrice = products && products.length !== 0
  ? (getSumOfPrices / getProductsCount).toFixed(2)
  : 0;

  return (
    <Paper 
      elevation={2} 
      className={`info-block main__info-block ${classes.infoBlock}`}
    >
      <p>
        {getProductsCount === 0 ? 'No' : getProductsCount}
        {` products in catalog`}
      </p>
      <p>
        {`Sum of prices - `}
        {getSumOfPrices}
        $
      </p>
      <p>
        {`Average price - `}
        {getAveragePrice}
        $
      </p>
      {getRole !== 'user' && (<Button 
        variant="contained" 
        color="secondary"
        type="button"
        className="destroy"
        onClick={clearProducts}
      >
        clear catalog
      </Button>)}
    </Paper>
  );
}
