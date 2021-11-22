import {ThemeProvider } from '@mui/material/styles';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import customtheme from './custom/customtheme';
import Home from './components/Home'
function App() {
  const theme=customtheme();
  return (
    <Router>
      <ThemeProvider theme={theme}>
           <Navbar />
           <Routes>
                <Route exact path="" element={<Home />} />
           </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
