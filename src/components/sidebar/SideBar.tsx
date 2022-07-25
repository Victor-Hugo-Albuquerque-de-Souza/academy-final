import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@mui/material/Divider";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import PersonIcon from "@mui/icons-material/Person";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { AccordionComponent } from "./Accordion";
import SearchIcon from "@mui/icons-material/Search";
import MovieIcon from "@mui/icons-material/Movie";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { Link } from "react-router-dom";

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ flexDirection: "column" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Link to="/" style={{textDecoration:'none', color:'white'}}>
          <Toolbar style={{ backgroundColor: "#ffca28" }}>
            <Typography variant="h6" noWrap component="div">
              Academy 2022 - NodeJS Module
            </Typography>
          </Toolbar>
        </Link>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />

        <Divider />

        <AccordionComponent
          accordionIcon={<LocalMoviesIcon />}
          accordionName="Filmes"
          linkChild1="novoFilme"
          firstChildIcon={<MovieIcon />}
          firstChildTypo="Cadastrar Filme"
          linkChild2="buscarFilmes"
          secondChildIcon={<SearchIcon />}
          secondChildTypo="Buscar Filme(s)"
        />

        <AccordionComponent
          accordionIcon={<PersonIcon />}
          accordionName="Clientes"
          linkChild1="novoCliente"
          firstChildIcon={<PersonAddIcon />}
          firstChildTypo="Cadastrar Cliente"
          linkChild2="consultarCliente"
          secondChildIcon={<SearchIcon />}
          secondChildTypo="Buscar Cliente(s)"
        />

        <AccordionComponent
          accordionIcon={<AttachMoneyIcon />}
          accordionName="Alugueis"
          linkChild1="novoAluguel"
          firstChildIcon={<CurrencyExchangeIcon />}
          firstChildTypo="Novo Aluguel"
          linkChild2="consultarAluguel"
          secondChildIcon={<SearchIcon />}
          secondChildTypo="Buscar Aliguel(is)"
        />

        <Divider />
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}
