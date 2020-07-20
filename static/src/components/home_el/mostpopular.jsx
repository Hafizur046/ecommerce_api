import React from 'react';
import Product from './Product'
export default function MostPopular(){
    return(
        <div class="product-area most-popular section">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="section-title">
                <h2>Hot Item</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="owl-carousel popular-slider">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}