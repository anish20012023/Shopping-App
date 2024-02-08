import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingRight: "25px",
    "& .heading": {
      marginBottom: "20px",
      fontWeight: "bold",
    },

    // responsive
    [theme.breakpoints.down("md")]: {
      padding: "30px !important",
    },
  },

  toggleGroup: {
    "&.MuiToggleButtonGroup-root": {
      display: "flex !important",
      flexWrap: "wrap",
      gap: "12px",
      rowGap: "20px",
      border: "0px",

      "& .MuiToggleButton-root": {
        border: "0px solid",
        background: "#ECECEC",
        height: "35px",
        width: "35px",
        borderRadius: "50%",
        fontSize: "10px",
        fontWeight: "lighter",
        color: "#000000",
        "&:hover": {
          border: "1px solid #000000",
        },
        "&.Mui-selected": {
          background: "#000000",
          color: "white",
        },
      },
    },
  },
  githubStar: {
    marginTop: "40px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignItems: "start",

    "& p": {
      fontSize: "12px",
    },
    "& a": {
      fontSize: "14px",
    },
  },
}));
