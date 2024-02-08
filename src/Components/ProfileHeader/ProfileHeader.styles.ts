import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  headerPaper: {
    zIndex: "4",
    // headerPaper for smaller screen
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: "0 7px",
      position: "fixed",
      bottom: "7px",
    },
    // about
    "& .about": {
      minHeight: "80px",
      width: "380px",
      margin: "0 auto",
      borderRadius: "0px",
      borderBottomLeftRadius: "4px",
      borderBottomRightRadius: "4px",
      boxShadow: "none",
      borderTop: "0px",
      border: "2px solid #EEEEEE",
      display: "flex",
      alignItems: "center",
      padding: "5px 1px 5px 8px",
      gap: "10px",
      // about for smaller screen
      [theme.breakpoints.down("md")]: {
        width: "100%",
        padding: "12px 10px",

        border: "2px solid #EEEEEE !important",
        borderRadius: "4px !important",
      },
      "& .MuiAvatar-root": {
        width: "55px",
        height: "55px",
      },
      "& .rightAbout": {
        // border: "1px solid",
        "& .MuiTypography-root": {
          fontSize: "12px",
          "&.MuiTypography-body1": { fontWeight: "bolder" },
          "& a": { fontWeight: "bolder", color: "#000000", textDecorationColor: "#000000" },
        },
      },
    },
  },
}));
