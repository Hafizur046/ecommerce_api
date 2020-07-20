import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';
export default function Breadcrumb({cat}){
    let extracted = cat.split('>')
    function Li({catagory}){
        let temp = '/catagory/'
        return catagory.map(catInCatagory => {
            if(catInCatagory === catagory[0]){
                temp = temp+catInCatagory;
                return(
                    <li> <Link to={temp}>{catInCatagory}</Link></li>
                )
            }else{
                temp = temp+'>'+catInCatagory;
                return(
                    <li><i class="ti-arrow-right"></i> <Link to={temp}>{catInCatagory}</Link> </li>
                )
            }
        })
    }

    return(
	<div class="breadcrumbs">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="bread-inner">
                        <ul class="bread-list">
                          <Li catagory={extracted} />  
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}