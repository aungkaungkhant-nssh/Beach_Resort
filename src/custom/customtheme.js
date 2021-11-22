import { createTheme} from '@mui/material/styles';
const customtheme=()=>{
    const theme=createTheme({
        palette:{
          primary:{
            main:"#039be5"
          },
          dark:{
            main:"#424242",
            light:"#757575",
          },
          secondary:{
            main:"#e3f2fd",
            light:"#e1f5fe"
          },
          warning:{
            main:"#ffca28"
          }
        }
    })
    return theme;
}
export default customtheme;