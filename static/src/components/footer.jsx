import React from 'react';
import {Link} from 'react-router-dom';
export default function Footer(){
    return(
        <footer class="footer">
        <div class="footer-top section">
          <div class="container">
            <div class="row">
              <div class="col-lg-5 col-md-6 col-12">
                <div class="single-footer about">
                  <div class="logo">
                    <Link to="index.html"
                      ><img src="images/logo2.png" alt="#"
                    /></Link>
                  </div>
                  <p class="text">
                    Praesent dapibus, neque id cursus ucibus, tortor neque
                    egestas augue, magna eros eu erat. Aliquam erat volutpat.
                    Nam dui mi, tincidunt quis, accumsan porttitor, facilisis
                    luctus, metus.
                  </p>
                  <p class="call">
                    Got Question? Call us 24/7<span
                      ><Link to="tel:123456789">+0123 456 789</Link></span
                    >
                  </p>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 col-12">
                <div class="single-footer links">
                  <h4>Information</h4>
                  <ul>
                    <li><Link to="#">About Us</Link></li>
                    <li><Link to="#">Faq</Link></li>
                    <li><Link to="#">Terms & Conditions</Link></li>
                    <li><Link to="#">Contact Us</Link></li>
                    <li><Link to="#">Help</Link></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 col-12">
                <div class="single-footer links">
                  <h4>Customer Service</h4>
                  <ul>
                    <li><Link to="#">Payment Methods</Link></li>
                    <li><Link to="#">Money-back</Link></li>
                    <li><Link to="#">Returns</Link></li>
                    <li><Link to="#">Shipping</Link></li>
                    <li><Link to="#">Privacy Policy</Link></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-12">
                <div class="single-footer social">
                  <h4>Get In Tuch</h4>
                  <div class="contact">
                    <ul>
                      <li>NO. 342 - London Oxford Street.</li>
                      <li>012 United Kingdom.</li>
                      <li>info@eshop.com</li>
                      <li>+032 3456 7890</li>
                    </ul>
                  </div>
                  <ul>
                    <li>
                      <Link to="#"><i class="ti-facebook"></i></Link>
                    </li>
                    <li>
                      <Link to="#"><i class="ti-twitter"></i></Link>
                    </li>
                    <li>
                      <Link to="#"><i class="ti-flickr"></i></Link>
                    </li>
                    <li>
                      <Link to="#"><i class="ti-instagram"></i></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright">
          <div class="container">
            <div class="inner">
              <div class="row">
                <div class="col-lg-6 col-12">
                  <div class="left">
                    <p>
                      Copyright © 2020
                      <Link to="http://www.wpthemesgrid.com" target="_blank"
                        >Wpthemesgrid</Link
                      >
                      - All Rights Reserved.
                    </p>
                  </div>
                </div>
                <div class="col-lg-6 col-12">
                  <div class="right">
                    <img src="images/payments.png" alt="#" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}