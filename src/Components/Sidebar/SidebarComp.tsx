import { Box, Link, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useStyles } from "./SidebarComp.styles";
import { products } from "../../products";
import { useDispatch, useSelector } from "react-redux";
import { AddProducts, productData } from "../../Redux/shoppingSlice";
import { RootState } from "../../Redux/store";

function SidebarComp() {
  const [size, setSize] = useState<string[]>([]);
  const reduxdata = useSelector((state: RootState) => state.shopping.products);

  const dispatch = useDispatch();
  const handleSize = (event: React.MouseEvent<HTMLElement>, newsize: string[]) => {
    setSize(newsize);
  };
  useEffect(() => {
    type Timer = ReturnType<typeof setTimeout>;
    let timer: Timer;
    if (size.length == 0) {
      // initial rendering
      setTimeout(() => {
        dispatch(AddProducts({ isUpdating: false, products }));
      }, 1000);
    } else {
      dispatch(AddProducts({ isUpdating: true, products: reduxdata }));
      let newProduct: productData[] = [];
      for (let x of size) {
        let temp = products.filter((item) => {
          return item.sizes.includes(x) && !newProduct.includes(item);
        });
        newProduct = [...newProduct, ...temp];
      }
      timer = setTimeout(() => {
        dispatch(AddProducts({ isUpdating: false, products: newProduct }));
      }, 500);
    }
    return () => clearTimeout(timer);
  }, [size]);

  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className="heading">Sizes:</Typography>
      <ToggleButtonGroup value={size} onChange={handleSize} className={classes.toggleGroup}>
        {["XS", "S", "M", "ML", "L", "XL", "XXL"].map((item, index) => (
          <ToggleButton value={item} key={index} className="toggleBtn">
            {item}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <Box className={classes.githubStar}>
        <Typography>Leave a star on Github if this repository was useful :{`)`}</Typography>
        <Link href="#" target="_blank">
          Star
        </Link>
      </Box>
    </Box>
  );
}

export default SidebarComp;
