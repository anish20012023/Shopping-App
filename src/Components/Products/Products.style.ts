import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    "& .header": {
      marginBottom: "20px",
      [theme.breakpoints.down("md")]: {
        paddingLeft: "10px",
      },
    },
  },
  mainBox: {
    display: "flex",
    flexWrap: "wrap",
    rowGap: "30px",
    "& .loaderBackdrop": {
      //   background: "transparent",
      zIndex: "2",
      "& .loader": {
        width: "90px",
        height: "70px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
        background: "black",
        "& span": {
          color: "white",
        },
      },
    },
  },
  // product card
  productCard: {
    width: "calc(100% / 4)",
    [theme.breakpoints.down("md")]: {
      width: "calc(100% / 2)",
    },

    padding: "10px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: "10px",

    "& .imageBox": {
      minHeight: "325px",
      [theme.breakpoints.down("md")]: {
        minHeight: "auto",
      },

      "& img": {
        width: "100%",
      },
      "& .onhoverImg": {
        display: "none",
      },
    },
    // product card hover
    "&:hover": {
      "& .initialImg": {
        display: "none",
      },
      "& .onhoverImg": {
        display: "block !important",
      },
      "& button": {
        background: "#EABF00 !important",
      },
    },
  },
  //free shipping tag
  free_shipping: {
    color: "white",
    background: "black",
    fontSize: "9px",
    padding: " 5px",
    position: "absolute",
    top: "10px",
    right: "10px",
  },

  // product title
  title: {
    height: "50px",
    position: "relative",
    padding: "0 10px",
    "& p": {
      textAlign: "center",
    },

    "&::before": {
      content: '""',
      width: "20px",
      height: "2px",
      background: "#EABF00",
      position: "absolute",
      bottom: "0",
      left: "calc((100% - 30px) / 2)",
    },
  },
  // product price
  price_box: {
    textAlign: "center",

    "& .dollar_sign": {
      fontSize: "11px",
      marginRight: "8px",
    },
    "& .price": {
      fontSize: "14px",
      "& span": {
        fontSize: "24px",
        fontWeight: "900",
      },
    },
  },
  // installment offers
  offer_box: {
    textAlign: "center",
    color: "#9C9B9B",
    "& .offer span": {
      fontWeight: "bold",
    },
  },

  // cart button
  cartBtn: {
    "&.MuiButton-root": {
      width: "100%",
      borderRadius: "0px",
      padding: "13px 0 !important",
      background: "black !important",
      color: "white",
      textTransform: "capitalize",
      fontWeight: "lighter",
    },
  },
}));
