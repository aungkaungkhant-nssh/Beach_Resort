import {ThemeProvider } from '@mui/material/styles';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import customtheme from './custom/customtheme';
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom';
function App() {
  const theme=customtheme();
  return (
    <Router>
      <ThemeProvider theme={theme}>
           <Navbar />
           <Routes>
                 <Route exact path="/" element={<Home />} />
                 <Route exact path="/rooms" element={<Rooms />} />
                 <Route exact path="/rooms/:slug" element={<SingleRoom />} />
                 <Route path="*"  element={<NotFound />}></Route>
           </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
