import { createTheme } from "@material-ui/core";
import { amber } from "@material-ui/core/colors";

export const AmbarTheme = createTheme({
    palette:{
        primary:{
            light: amber[200],
            main: amber[500],
            dark: amber[900],
    }
    },
    shape:{
        borderRadius:0
    },
    typography:{
        button:{
            fontFamily:"Righteous",
            fontWeight:900
        },
    }
});