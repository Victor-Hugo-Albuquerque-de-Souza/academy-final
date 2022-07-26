import { ReactElement, useState } from "react";
import {
    Box,
    FormControl,
    Grid,
    MenuItem,
    TextField,
  } from "@material-ui/core";
import FilterType from "./FilterType";


export default function CustomerAttributeRow(props:any):ReactElement{
    const attributesArray=props.attributes
    const [stateFilter1,setStateFilter1]=useState()

    return(
        <Grid
          container
          spacing={4}
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginLeft: "4px",
          }}
        >
          <Grid item sm={6} style={{ paddingLeft: 0 }}>
            <FormControl margin={"dense"} fullWidth>
              <TextField select label="filtro" defaultValue={"Selecione.."} onChange={(event:any)=>setStateFilter1(event.target.value)}>
                <MenuItem value={"Selecione.."}>Selecione:</MenuItem>

                {attributesArray.map((attribute:string) => {
                  return (
                    <MenuItem
                      value={attribute.toString()}
                      key={"k" + attribute}                    
                    >                  
                      {attribute}
                    </MenuItem>
                  );
                })}
              </TextField>
            </FormControl>
          </Grid>

            <FilterType type={stateFilter1}/>
          
          <Box
            height={"fit-content"}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
          </Box>

        </Grid>
    )
}