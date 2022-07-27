import { ReactElement, useState, useEffect } from "react";
import Redirect from 'react-router';
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
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
import { Alert, FormLabel, MenuItem, TextareaAutosize } from "@mui/material";
import { languages } from "../../interfaces/Enums";
import { createMovie } from "../../interfaces/Index";
import * as Yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import { IRequest } from "../../interfaces/Index";
import { api } from "../../requests/Requests";
import CustomizedSnackbars from './sas'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import axios from "axios";
import { useForm } from "react-hook-form";

const schema=Yup.object({
  title:Yup.string().required('O campo título é obrigatório'),
  description:Yup.string(),
  release_year: Yup.number(),
  language_id:Yup.string().required('O campo idioma é obrigatório'),
  rental_duration:Yup.number().required('Este campo é obrigatório'),
  rental_rate: Yup.number().required('Este campo é obrigatório'),
  replacement_cost: Yup.number().required('Este campo é obrigatório'),
  rating: Yup.string(),
})

export function FilmCreation(): ReactElement {

  const [isLoading, setIsLoading] = useState(false);

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  let navigate=useNavigate()


  const {register, handleSubmit, setError, formState:{errors}}=useForm({resolver:yupResolver(schema)})

  const onHandleSubmit = async (data: any) => { 
    const submitData: any = {
      title: data.title,
      description: data.description,
      release_year: data.release_year,
      language_id:data.language_id,
      rental_duration:data.rental_duration,
      rental_rate: data.rental_rate,
      replacement_cost: data.replacement_cost,
      rating: data.rating,
      // special_features:data.special_features
    };
    // toast({
    //   position: "bottom",
    //   containerStyle: {
    //     textAlign: "center",
    //     borderRadius: "25",
    //     fontSize: "18",
    //   },
    //   render: () => (
    //     <Box color="white" p={3} bg="blue.600">
    //       Carregando...
    //     </Box>
    //   ),
    // });
    try {
      setIsLoading(true);
      console.log("estou vivo")
      axios
        .post(
          'http://localhost:3335/api/v1/film',
          submitData
        )
        .then(() => {
          handleClick();
          // toast.closeAll();
          // toast({
          //   position: "bottom",
          //   containerStyle: {
          //     textAlign: "center",
          //     borderRadius: "25",
          //     fontSize: "18",
          //   },
          //   render: () => (
          //     <Box color="white" p={3} bg="green.600">
          //       Cadastro realizado com sucesso.
          //     </Box>
          //   ),
          // });
          navigate("/");
          setIsLoading(false);
        })
        .catch((error) => {
          handleClick()
          // toast.closeAll();
          // toast({
          //   position: "bottom",
          //   containerStyle: {
          //     textAlign: "center",
          //     borderRadius: "25",
          //     fontSize: "18",
          //   },
          //   render: () => (
          //     <Box color="white" p={3} bgcolor="red.500">
          //       {error.response.status == 409
          //         ? "Você já faz parte dessa ação! ;) Entre com outro e-mail caso queira fazer parte novamente."
          //         : "Ocorreu um erro ao salvar"}
          //     </Box>
          //   ),
          // });
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

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
      <CustomizedSnackbars/>
      <form onSubmit={onHandleSubmit}>
      <FormGroup onSubmit={onHandleSubmit}>
        
        <FormLabel style={{ fontSize: "25px" }}>Cadastro de Filme:</FormLabel>

        <Grid container spacing={3} justifyContent={"flex-end"}>
          <Grid item sm={12}>
            <FormControl margin={"dense"} fullWidth>
              <InputLabel htmlFor="f_title">Título:</InputLabel>
              <Input id="f_title" type="text" {...register('title')} />
              {/* <p>{errors.title?.message}</p> */}
            </FormControl>
          </Grid>
         

          <Grid item sm={12}>
            <InputLabel>Descrição:</InputLabel>
            <FormControl margin={"dense"} fullWidth>
              <TextareaAutosize
                // name="n_description"
                aria-setsize={15}
                aria-label="empty textarea"
                style={{ width: "100%", resize: "none" }}
                minRows={6}
                {...register('description')}
              />
            </FormControl>
          </Grid>

          <Grid item sm={4}>
            <FormControl margin={"dense"} fullWidth>
              <InputLabel htmlFor="f_year">Ano lançamento:</InputLabel>
              <Input id="f_year" type="number" {...register('release_year')} />
            </FormControl>
          </Grid>

          <Grid item sm={4}>
            <FormControl margin={"dense"} fullWidth>
              <TextField select label="Idiomas" {...register('language_id')} defaultValue={''}>
                {languages.map((language)=>{
                  return(
                    <MenuItem key={'k_'+ language}value={1}>{language}</MenuItem>
                  )
                })}
              </TextField>
            </FormControl>
          </Grid>

          <Grid item sm={4}>
            <FormControl margin={"dense"} fullWidth>
              <InputLabel htmlFor="f_rentDuration">Empréstimo:</InputLabel>
              <Input  id="f_rentDuration" {...register('rental_duration')} type="number" />
            </FormControl>
          </Grid>

          <Grid item sm={4}>
            <FormControl margin={"dense"} fullWidth>
              <InputLabel htmlFor="f_rentalRate">Preço por período:</InputLabel>
              <Input id="f_rentalRate" {...register('rental_rate')} type="number" />
            </FormControl>
          </Grid>

          <Grid item sm={4}>
            <FormControl margin={"dense"} fullWidth>
              <InputLabel htmlFor="f_replacementCost">Reposição($):</InputLabel>
              <Input id="f_replacementCost" {...register('replacement_cost')} type="number" />
            </FormControl>
          </Grid>

          <Grid item sm={4}>
            <FormControl margin={"dense"} fullWidth>
              <InputLabel htmlFor="f_rating">Class. etária:</InputLabel>
              <Input id="f_rating" type="number" {...register('rating')} />
            </FormControl>
          </Grid>

          {/* <Grid item sm={12}>
            <InputLabel>Material Extra:</InputLabel>
            <FormControl margin={"dense"} fullWidth style={{display:'flex', flexDirection:'row'}}>
              <Box flex flexDirection={"row"}>
                <FormControlLabel
                  value="DeletedScenes"
                  control={<Checkbox size="small" color="primary" />}
                  label="Cenas Cortadas"
                  color="primary"
                  {...register('special_features')}
                />
                <FormControlLabel
                  value="Trailers"
                  // control={<Checkbox size="small" color="primary" /* {...register('special_features')} />}
                  {/* label="Trailers"
                  {...register('special_features')}

                />
              </Box>

              <Box flex flexDirection={"row"}>
                <FormControlLabel
                  value="Commentaires"
                  control={<Checkbox size="small" color="primary" /* {...register('special_features')}  />}
                  {/* label="Comentários"
                  {...register('special_features')}

                />

                <FormControlLabel
                  value="Behind_the_Scenes"
                  control={<Checkbox size="small" color="primary" {...register('special_features')}/>}
                  label="Making-of"
                  {...register('special_features')}

                />
              </Box>

            </FormControl>
          </Grid>   */}

          <Button
            color={"primary"}
            variant={"contained"}
            onClick={handleSubmit(onHandleSubmit)}
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
      </form>

      <Stack spacing={2} sx={{ width: '100%' }}>
     
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
   
    </Stack>
    </Box>
  );
}
