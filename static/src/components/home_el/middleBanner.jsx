import React from 'react';

export default function MiddleBanner(){
    return(
        <section class="midium-banner">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-12">
              <div class="single-banner">
                <img src="https://via.placeholder.com/600x370" alt="#" />
                <div class="content">
                  <p>Man's Collectons</p>
                  <h3>Man's items <br />Up to<span> 50%</span></h3>
                  <a href="#">Shop Now</a>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-12">
              <div class="single-banner">
                <img src="https://via.placeholder.com/600x370" alt="#" />
                <div class="content">
                  <p>shoes women</p>
                  <h3>
                    mid season <br />
                    up to <span>70%</span>
                  </h3>
                  <a href="#" class="btn">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}