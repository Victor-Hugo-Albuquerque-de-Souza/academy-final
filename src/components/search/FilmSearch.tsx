import {
  Box,
  Button,
  Divider,
  FormGroup,
  FormLabel,
} from "@material-ui/core";
import { ReactElement, useState } from "react";
import AttributeRow from "./components/AttributeRow";
import { filmAttributes } from "../../interfaces/Enums";

export default function SearchMovie(): ReactElement {


  return (
    <Box
      width={"700px"}
      height={"fit-content"}
      flex
      justifyContent={"center"}
      alignContent={"center"}
    >
      <FormGroup>
        <FormLabel style={{ fontSize: "40px" }}>Busca de Filmes:</FormLabel>

        <AttributeRow attributes={filmAttributes}/>
        <AttributeRow attributes={filmAttributes}/>
        <AttributeRow attributes={filmAttributes}/>
        <AttributeRow attributes={filmAttributes}/>
        <AttributeRow attributes={filmAttributes}/>
        <AttributeRow attributes={filmAttributes}/>

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
