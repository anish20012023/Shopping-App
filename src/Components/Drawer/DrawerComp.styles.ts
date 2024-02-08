import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  cartBadge: {},
  CartIconBox: {
    width: "50px",
    height: "50px",
    background: "#17161B",
    color: "white",
    position: "fixed",
    right: "0",
    top: "0",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "3",
    "& .cartBadge": {
      width: "50%",
      heigth: "50%",
      "& img": {
        width: "100%",
      },
      "& .MuiBadge-badge": {
        background: "#E2B801",
        color: "#000000",
        top: "120%",
        padding: "0px",
        minWidth: "18px",
        height: "18px",
        borderRadius: "50%",
      },
    },
  },
  // drawer
  drawerModal: {
    "&.MuiDrawer-root.MuiDrawer-modal": {
      width: "450px",
      left: "calc(100% - 450px)",
      [theme.breakpoints.down("md")]: {
        width: "100%",
        left: 0,
      },
    },

    "& .MuiModal-backdrop": {
      display: "none",
    },
    "& .MuiPaper-root": {
      position: "static",
      background: theme.mainColor,
    },
    // close icon button
    "& .closeIcon": {
      color: "white",
      position: "absolute",
      height: "50px",
      width: "50px",
      borderRadius: "0px",
      right: "100%",
      background: theme.mainColor,
      [theme.breakpoints.down("md")]: {
        left: "0%",
      },
      "& svg": {
        fontSize: "20px !important ",
      },

      "&:hover": {
        backgroundColor: "#17161B",
      },
    },
  },
  // checkout box
  checkoutBox: {
    color: "white",
    position: "fixed",
    bottom: "0px",
    width: "450px",
    textAlign: "center",
    padding: " 30px 20px",
    boxShadow: "0px -10px 20px -10px #100c08",
    [theme.breakpoints.down("md")]: { width: "100%" },

    height: "200px",
    "& .MuiButton-root": {
      width: "100%",
      borderRadius: "0px",
      padding: "12px 0px",
      color: "#fff",
      fontSize: "18px",
      fontWeight: "lighter",
      background: "#000000",
    },
    "& .subTotal": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingBottom: "30px",
      color: "#5B5A5E",
      "& p": {
        fontWeight: "lighter",
      },
    },
  },
  // cart products
  cartProduct: {
    height: "calc(100% - 200px)",
    overflowY: "scroll",
    padding: "60px 20px 0px",

    "&::-webkit-scrollbar": {
      width: "10px",
    },
    "&::-webkit-scrollbar-track": {
      // background: "#1B1A20",
      background: "#000000",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#000000",
      borderRadius: "3px",
    },

    "&  .cartHeader": {
      color: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "25px",
      "& p": {
        fontSize: "20px",
        fontWeight: "bolder",
      },
      "& .cartBadge": {
        "& .MuiBadge-badge": {
          background: "#E2B801",
          color: "#000000",
          top: "120%",
          padding: "0px",
          minWidth: "18px",
          height: "18px",
        },
      },
    },
    // emptycart
    "& .emptycart": {
      textAlign: "center",
    },

    //showcartBox
    "& .showcartBox": {
      color: "#fff",
      // border: "1px solid",
      marginTop: "60px",
    },
  },
  singleCartBox: {
    borderTop: "2px solid rgba(0,0,0,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 0px",
    // left box
    "& .leftBox": {
      display: "flex",
      alignItems: "center",
      gap: "10px",

      "& img": {
        width: "60px",
        height: "90px",
        objectFit: "cover",
      },
      "& .description": {
        "& p": {
          color: "#5B5A5E",
        },
      },
    },
    // right box
    "& .rightBox": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "flex-end",
      alignSelf: "stretch",

      "& .closeicon ": {
        padding: "0px",

        "& .MuiSvgIcon-root": {
          fontSize: "20px !important",
        },
      },
      "& p": {
        color: "#E2B801",
      },
      "& .btnGroup.MuiButtonGroup-root": {
        "& button": {
          padding: "0px",
          borderRadius: "0px",
          minWidth: "25px",
          height: "25px",
          border: "0px",
          color: "gray",
          background: "rgba(0,0,0,.5)",
          "&:nth-child(1)": {
            background: "rgba(0,0,0,.2)",
          },
        },
      },
    },
  },
}));
