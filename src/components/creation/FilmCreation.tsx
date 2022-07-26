import { ReactElement, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import {
  Box,
  FormControl,
  Input,
  Grid,
  InputLabel,
  FormGroup,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { FormLabel, MenuItem, TextareaAutosize } from "@mui/material";
import { languages } from "../../interfaces/Enums";
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import { IRequest } from "../../interfaces/Index";


export function FilmCreation(): ReactElement {

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
      <FormGroup /* onSubmit={handleSubmit(onHandleSubmit)} */>
        <FormLabel style={{ fontSize: "25px" }}>Cadastro de Filme:</FormLabel>

        <Grid container spacing={3} justifyContent={"flex-end"}>
          <Grid item sm={12}>
            <FormControl margin={"dense"} fullWidth>
              <InputLabel htmlFor="f_name">Título:</InputLabel>
              <Input id="f_name" type="text" />
            </FormControl>
          </Grid>

          <Grid item sm={12}>
            <InputLabel>Descrição:</InputLabel>
            <FormControl margin={"dense"} fullWidth>
              <TextareaAutosize
                aria-setsize={15}
                aria-label="empty textarea"
                style={{ width: "100%", resize: "none" }}
                minRows={6}
              />
            </FormControl>
          </Grid>

          <Grid item sm={4}>
            <FormControl margin={"dense"} fullWidth>
              <InputLabel htmlFor="f_year">Ano lançamento:</InputLabel>
              <Input id="f_year" type="number" />
            </FormControl>
          </Grid>

          <Grid item sm={4}>
            <FormControl margin={"dense"} fullWidth>
              <TextField select label="Idiomas" defaultValue={"Selecione.."}>
                {languages.map((language)=>{
                  return(
                    <MenuItem value={language}>{language}</MenuItem>
                  )
                })}
              </TextField>
            </FormControl>
          </Grid>

          <Grid item sm={4}>
            <FormControl margin={"dense"} fullWidth>
              <InputLabel htmlFor="f_rentDuration">Empréstimo:</InputLabel>
              <Input id="f_rentDuration" type="number" />
            </FormControl>
          </Grid>

          <Grid item sm={4}>
            <FormControl margin={"dense"} fullWidth>
              <InputLabel htmlFor="f_rentalRate">Preço por período:</InputLabel>
              <Input id="f_rentalRate" type="number" />
            </FormControl>
          </Grid>

          <Grid item sm={4}>
            <FormControl margin={"dense"} fullWidth>
              <InputLabel htmlFor="f_replacementCost">Reposição($):</InputLabel>
              <Input id="f_replacementCost" type="number" />
            </FormControl>
          </Grid>

          <Grid item sm={4}>
            <FormControl margin={"dense"} fullWidth>
              <InputLabel htmlFor="f_rating">Class. etária:</InputLabel>
              <Input id="f_rating" type="number" />
            </FormControl>
          </Grid>

          <Grid item sm={12}>
            <InputLabel>Material Extra:</InputLabel>
            <FormControl margin={"dense"} fullWidth style={{display:'flex', flexDirection:'row'}}>
              <Box flex flexDirection={"row"}>
                <FormControlLabel
                  value="DeletedScenes"
                  control={<Checkbox size="small" color="primary"/>}
                  label="Cenas Cortadas"
                  color="primary"
                />
                <FormControlLabel
                  value="Trailers"
                  control={<Checkbox size="small" color="primary" />}
                  label="Trailers"
                  
                />
              </Box>

              <Box flex flexDirection={"row"}>
                <FormControlLabel
                  value="Commentaires"
                  control={<Checkbox size="small" color="primary" />}
                  label="Comentários"
                />

                <FormControlLabel
                  value="Behind_the_Scenes"
                  control={<Checkbox size="small" color="primary" />}
                  label="Making-of"
                />
              </Box>

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
