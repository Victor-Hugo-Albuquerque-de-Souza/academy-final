import {
  FormControl,
  Grid,
  Input,
  InputLabel,
  TextField,
} from "@material-ui/core";
import {MenuItem} from "@mui/material";
import { languages } from "../../../interfaces/Enums";

export default function FilterType(
  props: any
): /* ReactElement|JsxElement */ any | undefined {
  switch (props.type) {
    case "Preço por Período":
    case "Classificação Etária":
    case "Ano de Lançamento":
    case "Preço de Reposição": {
      return (
        <>
          <Grid item sm={3}>
            <FormControl margin={"dense"} fullWidth>
              <InputLabel htmlFor="f_seachValue">Min:</InputLabel>
              <Input type="number" id="searchValue" />
            </FormControl>
          </Grid>
          <Grid item sm={3}>
            <FormControl margin={"dense"} fullWidth>
              <InputLabel htmlFor="f_seachValue">Max:</InputLabel>
              <Input type="number" id="searchValue" />
            </FormControl>
          </Grid>
        </>
      );
    }
    case "Título":
    case "Primeiro Nome":
    case "Último Nome":
    case "Email":
    case "Endereço":
    case "Cliente":
    case "Funcionário":
     {
      return (
        <Grid item sm={6}>
          <FormControl margin={"dense"} fullWidth>
            <InputLabel htmlFor="f_seachValue">Valor de Busca:</InputLabel>
            <Input type="text" id="searchValue" />
          </FormControl>
        </Grid>
      );
    }

    case "Idioma": {
      return (
        <Grid item sm={6}>
          <FormControl margin={"dense"} fullWidth>
            <TextField select label="Idiomas" defaultValue={"Selecione.."}>
              {languages.map((language: string) => {
                return <MenuItem value={language}>{language}</MenuItem>;
              })}
            </TextField>
          </FormControl>
        </Grid>
      );
    }

    case "Data do Aluguel":{
      return
    }
    default: {
      return;
    }
  }
}
