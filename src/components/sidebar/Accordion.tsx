import { ReactElement } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ExpandMore } from "@mui/icons-material";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import { IAccordion } from "../../interfaces/Index";

export function AccordionComponent(props:IAccordion): ReactElement {
  return (

    <Accordion style={{width:"100%", height:"fit-content" }}>

      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >

        <List disablePadding>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                {props.accordionIcon}
              </ListItemIcon>
              <ListItemText primary={props.accordionName} />
            </ListItemButton>
          </ListItem>
        </List>

      </AccordionSummary>

      <AccordionDetails>

        <Link to={props.linkChild1} style={{textDecoration:"none", color:"black"}}>
          <List disablePadding>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>{props.firstChildIcon}</ListItemIcon>
                <ListItemText primary={props.firstChildTypo} />
              </ListItemButton>
            </ListItem>
          </List>
        </Link>

        <Link to={props.linkChild2} style={{textDecoration:"none", color:"black"}}>
          <List disablePadding>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>{props.secondChildIcon}</ListItemIcon>
                <ListItemText primary={props.secondChildTypo} />
              </ListItemButton>
            </ListItem>
          </List>
        </Link>

      </AccordionDetails>
    </Accordion>
  );
}


// textOverflow=ellipsis