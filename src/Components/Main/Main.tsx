import DrawerComp from "../Drawer/DrawerComp";
import { Box } from "@mui/material";

import HomePage from "../Home/HomePage";

function Main() {
  return (
    <Box>
      <DrawerComp />
      <HomePage />
    </Box>
  );
}

export default Main;
