import React, { useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/home'
import Header from './components/header'
import Catagory from './components/catagory'
import Footer from './components/footer';
import Search from './components/search';

export default function App(catagorys, isFirst){
  const [user, setUser] = useState({});
  // console.log("From the List: ", catagorys)
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path="/catagory/:cat" component={Catagory} />
          <Route path="/search/:key" component={Search} />
        </ Switch>
        <Footer />
      </ Router>
    </div>
  )
}