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
    "& .loaderBackdrop": {
      //   background: "transparent",
      zIndex: "2",
      "& div": {
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

    display: "flex",
    flexWrap: "wrap",
    rowGap: "30px",
  },

  productCard: {
    width: "calc(100% / 4)",
    [theme.breakpoints.down("md")]: {
      width: "calc(100% / 2)",
    },
    // height: "500px",

    padding: "10px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: "15px",

    "& .imageBox": {
      minHeight: "320px",
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
      "& .cartBtn": {
        background: "#EABF00",
      },
    },
    //free shipping tag
    "& .tag": {
      color: "white",
      background: "black",
      fontSize: "9px",
      padding: " 5px",
      position: "absolute",
      top: "10px",
      right: "10px",
    },
    // title
    "& .title": {
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
    // price and offer
    "& .price_offer": {
      // price
      "& .priceBox": {
        textAlign: "center",

        "& .dollar": {
          fontSize: "11px",
          marginRight: "8px",
        },
        "& .price": {
          fontSize: "14px",
          "& span": {
            fontSize: "20px",
            fontWeight: "bold",
          },
        },
      },
      //   offer
      "& .offer": {
        textAlign: "center",
        color: "#9C9B9B",
        "& .offerOr span": {
          fontWeight: "bold",
        },
      },
    },

    // cart button
    "& .cartBtn": {
      width: "100%",
      borderRadius: "0px",
      padding: "13px 0",
      background: "black",
      color: "white",
      textTransform: "capitalize",
      fontWeight: "lighter",
    },
  },
}));