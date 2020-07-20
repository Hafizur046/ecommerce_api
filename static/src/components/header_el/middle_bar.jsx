import React, { useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

export default function Middle(){
    const [searchKey, setSearch] = useState('');
    function change(e){
      setSearch(e.target.value)
    } 
    return(
        <div className="middle-inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-12">
              <div className="logo">
                <a href="index.html"><img src="/images/logo.png" alt="logo"/></a>
              </div>
              <div className="search-top">
                <div className="top-search">
                  <a href="#0"><i className="ti-search"></i></a>
                </div>
                <div className="search-top">
                  <form className="search-form">
                    <input
                      type="text"
                      placeholder="Search here..."
                      name="search"
                      value={searchKey}
                      onChange={change}
                    />
                    <Link to={'/search/'+searchKey}><button value="search" >
                      <i className="ti-search"></i>
                    </button></Link>
                  </form>
                </div>
              </div>
              <div className="mobile-nav"></div>
            </div>
            <div className="col-lg-8 col-md-7 col-12">
              <div className="search-bar-top">
                <div className="search-bar">
                  <select style={{display: "none"}}>
                    <option selected="selected">All Category</option>
                    <option>watch</option>
                    <option>mobile</option>
                    <option>kid’s item</option>
                  </select>
                  <div class="nice-select" tabindex="0"><span class="current">All Category</span><ul class="list"><li data-value="All Category" class="option selected focus">All Category</li><li data-value="watch" class="option">watch</li><li data-value="mobile" class="option">mobile</li><li data-value="kid’s item" class="option">kid’s item</li></ul></div>
                  <form>
                    <input
                      name="search"
                      placeholder="Search Products Here....."
                      type="search"
                      onChange={change}
                      value={searchKey}
                    />
                    <Link to={'/search/'+searchKey}>
                    <button className="btnn"> 
                      <i className="ti-search"></i>
                    </button>
                    </Link>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-12">
              <div className="right-bar">
                <div className="sinlge-bar">
                  <a href="#" className="single-icon"
                    ><i className="fa fa-heart-o" aria-hidden="true"></i
                  ></a>
                </div>
                <div className="sinlge-bar">
                  <a href="#" className="single-icon"
                    ><i className="fa fa-user-circle-o" aria-hidden="true"></i
                  ></a>
                </div>
                <div className="sinlge-bar shopping">
                  <a href="#" className="single-icon"
                    ><i className="ti-bag"></i>
                    <span className="total-count">2</span></a
                  >
                  <div className="shopping-item">
                    <div className="dropdown-cart-header">
                      <span>2 Items</span>
                      <a href="#">View Cart</a>
                    </div>
                    <ul className="shopping-list">
                      <li>
                        <a href="#" className="remove" title="Remove this item"
                          ><i className="fa fa-remove"></i
                        ></a>
                        <a className="cart-img" href="#"
                          ><img src="https://via.placeholder.com/70x70" alt="#"
                        /></a>
                        <h4><a href="#">Woman Ring</a></h4>
                        <p className="quantity">
                          1x - <span className="amount">$99.00</span>
                        </p>
                      </li>
                      <li>
                        <a href="#" className="remove" title="Remove this item"
                          ><i className="fa fa-remove"></i
                        ></a>
                        <a className="cart-img" href="#"
                          ><img src="https://via.placeholder.com/70x70" alt="#"
                        /></a>
                        <h4><a href="#">Woman Necklace</a></h4>
                        <p className="quantity">
                          1x - <span className="amount">$35.00</span>
                        </p>
                      </li>
                    </ul>
                    <div className="bottom">
                      <div className="total">
                        <span>Total</span>
                        <span className="total-amount">$134.00</span>
                      </div>
                      <a href="checkout.html" className="btn animate">Checkout</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        )
}