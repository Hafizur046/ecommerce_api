import React, { useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Catagorys from './catagorys'
export default function Nav({name}){
    return(
        <div className="header-inner">
        <div className="container">
            <div className="cat-nav-head">
                <div className="row">
                    <Route path="/" exact component={Catagorys}/>
                    <div className="col-lg-9 col-12">
                        <div className="menu-area">
                            <nav className="navbar navbar-expand-lg">
                                <div className="navbar-collapse">
                                    <div className="nav-inner">
                                        <ul className="nav main-menu menu navbar-nav">
                                            <li className="active"><a href="#">Home</a></li>
                                            <li><a href="#">Product</a></li>
                                            <li><a href="#">Service</a></li>
                                            <li>
                                                <a href="#">Shop<i className="ti-angle-down"></i><span
                                                        className="new">New</span></a>
                                                <ul className="dropdown">
                                                    <li><a href="shop-grid.html">Shop Grid</a></li>
                                                    <li><a href="cart.html">Cart</a></li>
                                                    <li><a href="checkout.html">Checkout</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Pages</a></li>
                                            <li>
                                                <a href="#">Blog<i className="ti-angle-down"></i></a>
                                                <ul className="dropdown">
                                                    <li>
                                                        <a href="blog-single-sidebar.html">Blog Single Sidebar</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}