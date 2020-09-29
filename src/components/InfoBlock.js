import React, { useMemo }  from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  infoBlock: {
    backgroundColor: "#f6f6f6",
    color: "#6d6464",
  },
});

export const InfoBlock = ({ 
  products,
  clearProducts,
  getSumOfPrices,
  getProductsCount,
  getRole }) => {
  const classes = useStyles();

  const getAveragePrice = useMemo(() => {
    return products && products.length !== 0
    ? (getSumOfPrices / getProductsCount).toFixed(2)
    : 0;
  }, [getSumOfPrices, getProductsCount, products]); 

  return (
    <Paper 
      elevation={1} 
      className={`info-block main__info-block ${classes.infoBlock}`}
    >
      <p className="info-block__item">
        {getProductsCount === 0 ? 'No' : getProductsCount}
        {` products in catalog`}
      </p>
      <p className="info-block__item">
        {`Sum of prices - `}
        {getSumOfPrices}
        $
      </p>
      <p className="info-block__item info-block__item_last">
        {`Average price - `}
        {getAveragePrice}
        $
      </p>
      {getRole !== 'user' && (<Button 
        variant="contained" 
        color="secondary"
        type="button"
        onClick={clearProducts}
      >
        clear catalog
      </Button>)}
    </Paper>
  );
}
