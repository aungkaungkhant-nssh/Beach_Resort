import { createTheme,ThemeProvider } from '@mui/material/styles';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import customtheme from './custom/customtheme';
function App() {
  const theme=customtheme();
  return (
    <Router>
      <ThemeProvider theme={theme}>
           <Navbar />
      </ThemeProvider>
       
        
    </Router>
  );
}

export default App;
