import { Avatar, Box, Container, Icon, Link, Paper, Typography } from "@mui/material";
import { useStyles } from "./HomePage.styles";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import SidebarComp from "../Sidebar/SidebarComp";
import Products from "../Products/Products";

function HomePage() {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth={"xl"} disableGutters>
      {/* profile header */}
      <ProfileHeader />
      {/* main content sidebar and products */}
      <Box className={classes.MainBox}>
        <Box className="sidebar">
          <SidebarComp />
        </Box>
        <Box className="products">
          <Products />
        </Box>
      </Box>
    </Container>
  );
}

export default HomePage;
