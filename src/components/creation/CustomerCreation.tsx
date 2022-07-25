import { ReactElement, useEffect } from "react";
import Button from "@material-ui/core/Button";
import {
  Box,
  FormControl,
  Input,
  Grid,
  InputLabel,
  FormGroup,
} from "@material-ui/core";
import { FormLabel } from "@mui/material";

export function CustomerCreation(): ReactElement {

  return (
    <Box
      display={"flex"}
      width={"500px"}
      height={"fit-content"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      style={{
        backgroundColor: "#eee",
        padding: 20,
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
        
      }}
      borderRadius={5}
    >
      <FormGroup /* onSubmit={handleSubmit} */>
        <FormLabel style={{ fontSize: "25px" }}>Cadastro de Clientes:</FormLabel>

        <Grid container spacing={3} justifyContent={"flex-end"}>
          <Grid item sm={12}>
            <FormControl margin={"dense"} fullWidth>
              <InputLabel htmlFor="f_name">Primeiro Nome:</InputLabel>
              <Input id="f_name" type="text" />
            </FormControl>
          </Grid>

          <Grid item sm={12}>
            <FormControl margin={"dense"} fullWidth>
              <InputLabel htmlFor="f_name">Último Nome:</InputLabel>
              <Input id="f_name" type="text" />
            </FormControl>
          </Grid>

          <Grid item sm={4}>
            <FormControl margin={"dense"} fullWidth>
              <InputLabel htmlFor="f_name">Email:</InputLabel>
              <Input id="f_name" type="text" />
            </FormControl>
          </Grid>

          <Grid item sm={8}>
            <FormControl margin={"dense"} fullWidth>
              <InputLabel htmlFor="f_year">Endereço:</InputLabel>
              <Input id="f_year" type="number" />
            </FormControl>
          </Grid>

          <Button
            color={"primary"}
            variant={"contained"}
            type={"submit"}
            style={{
              marginRight: "10px",
              marginTop: "25px",
              marginBottom: "25px",
            }}
          >
            Cadastrar
          </Button>
        </Grid>
      </FormGroup>
    </Box>
  );
}
