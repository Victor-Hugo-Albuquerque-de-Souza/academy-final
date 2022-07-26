import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Divider, FormGroup, FormLabel } from "@material-ui/core";
import { ReactElement, useEffect, useRef, useState } from "react";
import AttributeRow from "./components/FilmAttributeRow";
import { filmAttributes } from "../../interfaces/Enums";
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';


export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>

        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <ContentPasteSearchIcon style={{color:'#777', marginRight:'25px'}}/>

          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Busca Avançada
          </Typography>

        </AccordionSummary>

        <AccordionDetails>

        <FormGroup>

        <AttributeRow attributes={filmAttributes} />
        <AttributeRow attributes={filmAttributes} />
        <AttributeRow attributes={filmAttributes} />
        <AttributeRow attributes={filmAttributes} />
        <AttributeRow attributes={filmAttributes} />
        <AttributeRow attributes={filmAttributes} />

        <Box>
          <Button
            size="medium"
            color={"primary"}
            variant={"contained"}
            type={"submit"}
            style={{ margin: "15px 0" }}
          >
            Buscar
          </Button>
        </Box>

      </FormGroup>
         
        
        </AccordionDetails>
      </Accordion>

      
    </div>
  );
}
