import { Box, ThemeProvider } from "@material-ui/core";
import { Margin } from "@mui/icons-material";
import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import PermanentDrawerLeft from "./components/sidebar/SideBar"
import { AmbarTheme } from "./styles/Index";

function App(): ReactElement {
  return (
    <ThemeProvider theme={AmbarTheme}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100vw"}
        height={"fit-content"}
        style={{paddingBottom:"30px", marginTop:'90px'}}
      >
        <PermanentDrawerLeft/>
        <Outlet/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
