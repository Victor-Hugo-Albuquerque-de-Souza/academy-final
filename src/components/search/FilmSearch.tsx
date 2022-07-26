import { Box, Button, Divider, FormGroup, FormLabel } from "@material-ui/core";
import { ReactElement, useEffect, useRef, useState } from "react";
import AttributeRow from "./components/FilmAttributeRow";
import { filmAttributes } from "../../interfaces/Enums";
import EnhancedTable from "./components/GettingFilms";
import ControlledAccordions from "./searchAccordeon";

export default function SearchMovie(): ReactElement {

  return (
    <Box
      width={"700px"}
      height={"fit-content"}
      flex
      justifyContent={"center"}
      alignContent={"center"}
    >

      <ControlledAccordions/>

      <Divider />

      <Box>

        <EnhancedTable/>
        
      </Box>
    </Box>
  );
}
