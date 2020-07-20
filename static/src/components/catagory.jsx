import React, { useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Breadcrumb from './shop-grid/breadcrumbs'
export default function Catagory({match}){
return <Breadcrumb cat={match.params.cat}/>
}