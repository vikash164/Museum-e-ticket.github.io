
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/inc/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navigate from "./components/pages/Navigate";
import Eticket from "./components/pages/Eticket";
import SocialFollow from './components/inc/SocialFollow';


import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from 'react';

import Footer from "./components/inc/Footer";
//import Eticket from './components/pages/Eticket';
function App() {

  const [ user, setcontactUser] = useState({})
  return (
    
    <Router>
    <div className="App">
    <Navbar/>
    <Switch>
    <Route exact path='/'>
    {
              user && user._id ? <Home setcontactUser={setcontactUser} />: <Home setcontactUser={setcontactUser}/>
             
    }
    </Route>

    <Route path='/about'>
    <About/>
    </Route>

    <Route path='/contact'>
    <Contact setcontactUser={setcontactUser}/>
    </Route>

    <Route path='/navigate'>
    <Navigate/>
    </Route>

    <Route path='/eticket'>
    <Eticket/>
    </Route>

   

    </Switch>
    <SocialFollow />
    <Footer/>
    
    
    </div>
    </Router>
  );
}

export default App;
