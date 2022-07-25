import { ReactElement, useState } from "react";
import {
    Box,
    FormControl,
    Grid,
    MenuItem,
    TextField,
  } from "@material-ui/core";
import FilterType from "./FilterType";


export default function AttributeRow(props:any):ReactElement{
    const attributesArray=props.attributes
    const [searchType, setSearchType]:any=useState()
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
          
          {/* <Grid item sm={6}>
            <FormControl margin={"dense"} fullWidth>
              <InputLabel htmlFor="f_seachValue">Valor de Busca:</InputLabel>
              <Input type="text" id="searchValue" />
            </FormControl>
          </Grid> */}
          
          <Box
            height={"fit-content"}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* <Button
              size="small"
              style={{
                margin: "20px 0",
                display:'flex',
                justifyContent:'flex-end',
                borderRadius: "50px",
                flexDirection:"column"
              }}
              variant="text"
              color="primary"
            >
              {props.field1_btn != "none"? "Remover":"Adicionar"}
            </Button> */}
          </Box>

        </Grid>
    )
}