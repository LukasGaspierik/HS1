import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavMenu } from './components/Navbar/NavbarElements';
import Announcement from './components/Announcement';
import Home from './pages/index';
import Shoes from './pages/shoes';
import Clothing from './pages/clothing';
import Accessories from './pages/accessories';
import SignUp from './pages/signup';
import Register from "./pages/register";

function App() {
  return (
    <Router>
      <Announcement />
      <Navbar />
      <NavMenu />
        <Switch>
        <Route exact path='/'> <Home/> </Route>
        <Route path='/shoes'> <Shoes/> </Route>
        <Route path='/clothing'> <Clothing/> </Route>
        <Route path='/accessories'> <Accessories/> </Route>
        <Route path='/signup'> <SignUp/> </Route>
        <Route path='/register'> <Register/> </Route>
        </Switch>
    </Router> 
  );
};


export default App;