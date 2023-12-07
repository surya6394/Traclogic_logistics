import './App.css';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import NavBar from './Components/NavBar';
import MainComponent from './Components/MainComponent';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
import Footer from './Components/Footer';
import Products from './NavBarPages/Products';
import Solution from './NavBarPages/Solution';
import Services from './NavBarPages/Services';
import Track from './NavBarPages/Track';
import Shop from './NavBarPages/Shop';
import Contact from './NavBarPages/Contact';


function App() {
  return (
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<MainComponent/>}/> 
          <Route path="/login" element={<LogIn/>}/> 
          <Route path="/signup" element={<SignUp/>}/>  
          <Route path="/product" element={<Products/>}/>
          <Route path="/solution" element={<Solution/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/track" element={<Track/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes> 
      <Footer/>

      </BrowserRouter>
  );
}

export default App;
