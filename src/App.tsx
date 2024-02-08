// import { Box } from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import { useEffect, useState } from "react";
// import { products } from "./products";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     border: "1px solid",
//     backgroundColor: "red",
//   },
// }));

// function App() {
//   const classes = useStyles();
//   const [size, setSize] = useState<any>(["XL", "L"]);
//   const [data, setData] = useState<any>(null);
//   useEffect(() => {
//     console.log("helo");
//     if (size.length == 0) {
//       setData(products);
//     } else {
//       let newProduct: any = [];
//       for (let x of size) {
//         let temp = products.filter((item) => {
//           return item.sizes.includes(x) && !newProduct.includes(item);
//         });
//         newProduct = [...newProduct, ...temp];
//       }
//       setData(newProduct);
//     }
//   }, [size]);

//   return <Box className={classes.root}>{data ? data.map((item: any) => <Box>{item.title}</Box>) : "empty"}</Box>;
// }

// export default App;

import { CssBaseline, ThemeProvider } from "@mui/material";
import { MainTheme } from "./Theme/MainTheme";
import Main from "./Components/Main/Main";

function App() {
  return (
    <ThemeProvider theme={MainTheme}>
      <CssBaseline />
      <Main />
    </ThemeProvider>
  );
}

export default App;
