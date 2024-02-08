import { Badge, Box, Button, ButtonGroup, Drawer, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { useStyles } from "./DrawerComp.styles";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { decProduct, incProduct, removeCart } from "../../Redux/cartSlice";

function DrawerComp() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  let totalPrice: number = 0;
  cart.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });

  const [open, setOpen] = useState<boolean>(false);
  return (
    <Box>
      <Box className={classes.CartIconBox} onClick={() => setOpen(true)}>
        <Badge badgeContent={!cart.length ? "0" : cart.length} className="cartBadge">
          <img src="images/cart.png" />
        </Badge>
      </Box>
      <Drawer open={open} anchor="right" onClose={() => setOpen(false)} className={classes.drawerModal}>
        <IconButton onClick={() => setOpen(false)} className="closeIcon">
          <CloseIcon />
        </IconButton>
        {/* cart products */}
        <Box className={classes.cartProduct}>
          <Box className="cartHeader">
            <Badge badgeContent={!cart.length ? "0" : cart.length} className="cartBadge">
              <img src="images/cart.png" />
            </Badge>
            <Typography>Cart</Typography>
          </Box>
          <Box className="showcartBox">
            {cart.length === 0 && (
              <Box className="emptycart">
                <Typography>Add some products in the cart</Typography>
                <Typography>:{")"}</Typography>
              </Box>
            )}
            {cart.map((item) => (
              <Box key={item.id} className={classes.singleCartBox}>
                <Box className="leftBox">
                  <img src={`images/products/${item.sku}-1-product.webp`} />
                  <Box className="description">
                    <Typography className="title" sx={{ color: "#fff !important" }}>
                      {item.title}
                    </Typography>
                    <Typography>
                      {item.sizes[0]} | {item.style}
                    </Typography>
                    <Typography>Quantity: {item.quantity}</Typography>
                  </Box>
                </Box>
                <Box className="rightBox">
                  <IconButton className="closeicon" onClick={() => dispatch(removeCart(item.id))}>
                    <CloseIcon />
                  </IconButton>
                  <Typography>$ {(item.price * item.quantity).toFixed(2)}</Typography>
                  <ButtonGroup className="btnGroup">
                    <Button onClick={() => dispatch(decProduct(item.id))}>-</Button>
                    <Button onClick={() => dispatch(incProduct(item.id))}>+</Button>
                  </ButtonGroup>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        {/* checkout Box */}
        <Box className={classes.checkoutBox}>
          <Box className="subTotal">
            <Typography>SUBTOTAL</Typography>
            <Box sx={{ textAlign: "end" }}>
              <Typography sx={{ color: "#EABF00", fontSize: "21px", fontWeight: "400 !important" }}>
                ${totalPrice.toFixed(2)}
              </Typography>
              <Typography>OR UP TO 9 x $ {(totalPrice / 9).toFixed(2)}</Typography>
            </Box>
          </Box>
          <Button
            onClick={() => alert(totalPrice ? `Checkout - Subtotal: $ ${totalPrice}` : "Add some product in the cart!")}
          >
            checkout
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
}

export default DrawerComp;
