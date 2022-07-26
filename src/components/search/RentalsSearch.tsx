import {
    Box,
    Button,
    Divider,
    FormGroup,
    FormLabel,
  } from "@material-ui/core";
  import { ReactElement, useState } from "react";
  import AttributeRow from "./components/FilmAttributeRow";
  import { rentalAttributes } from "../../interfaces/Enums";
  
  export default function SearchRentals(): ReactElement {
  
  
    return (
      <Box
        width={"700px"}
        height={"fit-content"}
        flex
        justifyContent={"center"}
        alignContent={"center"}
      >
        <FormGroup>
          <FormLabel style={{ fontSize: "40px" }}>Busca de Aluguéis:</FormLabel>
  
          <AttributeRow attributes={rentalAttributes}/>
          <AttributeRow attributes={rentalAttributes}/>
          <AttributeRow attributes={rentalAttributes}/>
          <AttributeRow attributes={rentalAttributes}/>
  
          <Box>
            <Button
              size="medium"
              color={"primary"}
              variant={"contained"}
              type={"submit"}
              style={{margin:'15px 0'}}
            >
              Buscar
            </Button>
          </Box>
        </FormGroup>
        <Divider/>
  
        <Box>
            <Button
              size="medium"
              color={"primary"}
              variant={"contained"}
              type={"submit"}
              style={{margin:'15px 0'}}
            >
              Listar todos
            </Button>
          </Box>
      </Box>
    );
  }
  