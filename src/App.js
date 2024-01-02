import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Header from './components/Header';
import NotFound from './components/NotFound';
import Login from './pages/Login';
import NewProduct from './pages/NewProduct';
import Button from '@mui/material/Button';
import BasicGrid from './components/MyGrid';
import AxiosPost from './components/AxiosPost';
import NumberList from './components/NumberList';
// import AxiosGet from './components/AxiosGet';


function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/new-user" element={<NewProduct/>}/>
        {/* <Route path="/new-user" element={<AxiosPost/>}/> */}


      </Routes>
      <NumberList/>
    </Router>
    {/* <BasicGrid/> */}

    </>
  );
}

export default App;
