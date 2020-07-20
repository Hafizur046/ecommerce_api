import React, { useEffect, useState} from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';


function List(catagorys, isFirst, prev){
  console.log("From the List: ", catagorys);
  if(isFirst){
    return (
        <ul className="main-category">
        {catagorys.map(catagory =>{
            if(catagory.subcats){
            if(catagory.subcats.length > 0){
            return(
                <li> <Link to={"/catagory/"+prev+catagory.catname} >{catagory.catname} <i className="fa fa-angle-right" aria-hidden="true"></i> </Link> {List(catagory.subcats, false, prev+catagory.catname+'>')}</li>
            )
            }}else{
            return(
                <li><Link to={"/catagory/"+prev+catagory.catname} >{catagory.catname} </Link></li>
            )
        }
        })}
        </ul>
    )
  }else{
        return (
            <ul className="sub-category">
            {catagorys.map(catagory =>{
                if(catagory.subcats){
                if(catagory.subcats.length > 0){
                return(
                <li><Link to={"/catagory/"+prev+catagory.catname} >{catagory.catname} <i className="fa fa-angle-right" aria-hidden="true"></i> </Link> {List(catagory.subcats,false,  prev+catagory.catname+'>')}</li>
                )
                }}else{
                return(
                <li><Link to={"/catagory/"+prev+catagory.catname} >{catagory.catname} </Link></li>
                )
            }
            })}
            </ul>
        )
    }
}

const defaultUrl = 'http://localhost:9000';
// const localUrl = 'http://localhost:3000'

export default function Catagorys(){
    const [cats, setCats] = useState([]);
    useEffect(()=>{
        console.log('Use effect has run')
        getCats();
    }, [])
    useEffect(()=>{
        console.log('Cats has changed', cats)
    }, [cats])
    const getCats = async ()=>{
        const response = await fetch(defaultUrl+'/getcatagorys');
        const rawCats = await response.json();
        setCats(rawCats.cats);
        console.log(rawCats.cats);
    }
    console.log('Outside: ', cats);
    return( 
        <div className="col-lg-3">
            <div className="all-category">
                <h3 className="cat-heading">
                    <i className="fa fa-bars" aria-hidden="true"></i>CATEGORIES
                </h3>
                    {List(cats, true, '')}
            </div>
        </div>
    )

    
}