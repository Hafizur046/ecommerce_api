import React from 'react';

export default function CountDown(){
    return(
        <section class="cown-down">
        <div class="section-inner ">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-6 col-12 padding-right">
                <div class="image">
                  <img src="https://via.placeholder.com/750x590" alt="#" />
                </div>
              </div>
              <div class="col-lg-6 col-12 padding-left">
                <div class="content">
                  <div class="heading-block">
                    <p class="small-title">Deal of day</p>
                    <h3 class="title">Beatutyful dress for women</h3>
                    <p class="text">
                      Suspendisse massa leo, vestibulum cursus nulla sit amet,
                      frungilla placerat lorem. Cars fermentum, sapien.
                    </p>
                    <h1 class="price">$1200 <s>$1890</s></h1>
                    <div class="coming-time">
                      <div class="clearfix" data-countdown="2020/04/06"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}