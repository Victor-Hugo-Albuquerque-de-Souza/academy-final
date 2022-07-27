import { Box, Button, Divider, FormGroup, FormLabel } from "@material-ui/core";
import { ReactElement, useEffect, useRef, useState } from "react";
import AttributeRow from "./components/FilmAttributeRow";
import { filmAttributes } from "../../interfaces/Enums";
import EnhancedTable from "./components/GettingCustomer";
import ControlledAccordions from "./CustomerSearchAccordeon";
import axios from "axios";

export default function SearchCustomer(): ReactElement {

  //   useEffect(() => {
  //   axios
  //     .request(getAll)
  //     .then(function (response) {
  //       console.log(response.data[0].description);

  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);

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

        <EnhancedTable />
        
      </Box>
    </Box>
  );
}
