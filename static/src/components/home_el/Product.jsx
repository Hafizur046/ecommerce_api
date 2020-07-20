import React from 'react';

export default function Product(){
    return(
        <div class="single-product">
        <div class="product-img">
          <a href="product-details.html">
            <img
              class="default-img"
              src="https://via.placeholder.com/550x750"
              alt="#"
            />
            <img
              class="hover-img"
              src="https://via.placeholder.com/550x750"
              alt="#"
            />
            <span class="out-of-stock">Hot</span>
          </a>
          <div class="button-head">
            <div class="product-action">
              <a
                data-toggle="modal"
                data-target="#exampleModal"
                title="Quick View"
                href="#"
                ><i class=" ti-eye"></i><span>Quick Shop</span></a
              >
              <a title="Wishlist" href="#"
                ><i class=" ti-heart "></i
                ><span>Add to Wishlist</span></a
              >
              <a title="Compare" href="#"
                ><i class="ti-bar-chart-alt"></i
                ><span>Add to Compare</span></a
              >
            </div>
            <div class="product-action-2">
              <a title="Add to cart" href="#">Add to cart</a>
            </div>
          </div>
        </div>
        <div class="product-content">
          <h3>
            <a href="product-details.html"
              >Black Sunglass For Women</a
            >
          </h3>
          <div class="product-price">
            <span class="old">$60.00</span>
            <span>$50.00</span>
          </div>
        </div>
      </div>
      
    )
} 