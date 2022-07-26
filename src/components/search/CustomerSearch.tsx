import {
    Box,
    Button,
    Divider,
    FormGroup,
    FormLabel,
  } from "@material-ui/core";
  import { ReactElement, useState } from "react";
  import AttributeRow from "./components/FilmAttributeRow";
  import { customerAttributes } from "../../interfaces/Enums";
  
  export default function SearchCustomer(): ReactElement {
  
  
    return (
      <Box
        width={"700px"}
        height={"fit-content"}
        flex
        justifyContent={"center"}
        alignContent={"center"}
      >
        <FormGroup>
          <FormLabel style={{ fontSize: "40px" }}>Busca de Clientes:</FormLabel>
  
          <AttributeRow attributes={customerAttributes}/>
          <AttributeRow attributes={customerAttributes}/>
          <AttributeRow attributes={customerAttributes}/>
          <AttributeRow attributes={customerAttributes}/>
  
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
  