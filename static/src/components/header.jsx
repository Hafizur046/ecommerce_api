import React, { useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Top from './header_el/top_bar';
import Middle from './header_el/middle_bar';
import Nav from './header_el/nav_bar.jsx';
import Login from './login';

let count = 0;

export default function Header(){
  const [loginWindow, setLoginWindow] = useState(false);
  console.log('this runs :header.jsx:10');
  if(loginWindow){
    return(
    <header class="header shop">
      <Top setLoginWindow={setLoginWindow}/>
      <Middle />
      <Nav/>
      <Login setLoginWindow={setLoginWindow}/>
    </header>
    )
  }else{
    return (
    <header class="header shop">
      <Top setLoginWindow={setLoginWindow}/>
      <Middle />
      <Nav />
    </header>
    );
  }
}