import React from 'react'
import Header from './components/header/index'
import Logo from './components/header/logo/logo'
import Corzin from './components/card/corzin/corzin'
import {Route} from 'react-router-dom'
import './scss/app.scss'


function App() {

  return (
   <div class="wrapper">
     <div class="header">
       <Logo />
     <Route  to path="/corzin" component={Corzin}  />
       <div class="container">
         <Route exact to path="/" component={Header}  />
        </div>       
      </div>
    </div>
  );
}

export default App;
