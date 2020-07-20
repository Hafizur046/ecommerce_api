import React from 'react';

export default function ShopServices(){
    return(
        <section class="shop-services section home">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-12">
              <div class="single-service">
                <i class="ti-rocket"></i>
                <h4>Free shiping</h4>
                <p>Orders over $100</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <div class="single-service">
                <i class="ti-reload"></i>
                <h4>Free Return</h4>
                <p>Within 30 days returns</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <div class="single-service">
                <i class="ti-lock"></i>
                <h4>Sucure Payment</h4>
                <p>100% secure payment</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <div class="single-service">
                <i class="ti-tag"></i>
                <h4>Best Peice</h4>
                <p>Guaranteed price</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}