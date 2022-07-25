import { ReactElement, useState } from "react";
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

export function RentalsCreation(): ReactElement {
  const [focus, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

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
        <FormLabel style={{ fontSize: "25px" }}>Novo Aluguel:</FormLabel>

        <Grid container spacing={4} justifyContent={"flex-end"}>
          <Grid item sm={6}>
            <FormControl margin={"dense"} fullWidth>
              <InputLabel htmlFor="f_rentalDate">Data do Aluguel:</InputLabel>
              <Input
                id="f_rentalDate"
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={(e) => {
                  if (e.target.value) setHasValue(true);
                  else setHasValue(false);
                }}
                type={hasValue || focus ? "date" : "text"}
              />
            </FormControl>
          </Grid>

          <Grid item sm={6}>
            <FormControl margin={"dense"} fullWidth>
              <InputLabel htmlFor="f_inventory">Cód. de inventário:</InputLabel>
              <Input id="f_inventory" type="text" />
            </FormControl>
          </Grid>

          <Grid item sm={6}>
            <FormControl margin={"dense"} fullWidth>
              <InputLabel htmlFor="f_customer">Cliente:</InputLabel>
              <Input id="f_customer" type="text" />
            </FormControl>
          </Grid>

          <Grid item sm={6}>
            <FormControl margin={"dense"} fullWidth>
              <InputLabel htmlFor="f_employee">Funcionário:</InputLabel>
              <Input id="f_employee" type="number" />
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
