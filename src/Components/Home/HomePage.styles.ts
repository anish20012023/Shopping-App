import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    padding: "0 40px",
    marginBottom: "40px",
    [theme.breakpoints.down("md")]: {
      padding: "0px",
    },
  },
  MainBox: {
    minHeight: "100vh",
    display: "flex",
    marginTop: "20px",
    "& .sidebar": {
      width: "20%",
    },
    "& .products": {
      width: "calc(100% - 20% )",
    },

    // responsive

    [theme.breakpoints.down("md")]: {
      display: "block",
      "& .sidebar, .products": {
        width: "100%",
      },
    },
  },
}));
