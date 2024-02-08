import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { Backdrop, Box, Button, CircularProgress, Typography } from "@mui/material";
import { useStyles } from "./Products.style";
import { addCart } from "../../Redux/cartSlice";

function Products() {
  const data = useSelector((state: RootState) => state.shopping);
  const products = data.products;
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Box className={classes.root}>
      <Typography className="header">{data.products.length} Products(S) found</Typography>
      <Box className={classes.mainBox}>
        {/* backdrop */}
        {data.isUpdating && (
          <Backdrop open className="loaderBackdrop">
            <Box>
              <CircularProgress />
            </Box>
          </Backdrop>
        )}
        {/* all products */}

        {products.map((item) => (
          <Box key={item.id} className={classes.productCard}>
            {/* card img */}
            <Box className="imageBox">
              <img className="initialImg" src={`images/products/${item.sku}-1-product.webp`} />
              <img className="onhoverImg" src={`images/products/${item.sku}-2-product.webp`} />
            </Box>
            {/* free shipping */}
            {item.isFreeShipping && <span className="tag">Free Shipping</span>}
            {/* title */}
            <Box className="title">
              <Typography>{item.title}</Typography>
            </Box>
            {/* price and offer */}
            <Box className="price_offer">
              <Box className="priceBox">
                <span className="dollar"> &#36;</span>
                <span className="price">
                  <span>{Math.trunc(item.price)}</span>.{item.price.toFixed(2).slice(-2)}
                </span>
              </Box>
              <Box className="offer">
                <span className="offerOr">
                  or {item.installments} x<span>&#36;{(item.price / item.installments).toFixed(2)}</span>
                </span>
              </Box>
            </Box>
            {/* Add to car button */}
            <Button className="cartBtn" onClick={() => dispatch(addCart({ ...item, quantity: 1 }))}>
              Add to cart
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Products;
