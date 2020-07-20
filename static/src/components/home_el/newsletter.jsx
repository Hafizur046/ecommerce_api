import React from 'react';

export default function Newsletter(){
    return(
        <section class="shop-newsletter section">
        <div class="container">
          <div class="inner-top">
            <div class="row">
              <div class="col-lg-8 offset-lg-2 col-12">
                <div class="inner">
                  <h4>Newsletter</h4>
                  <p>
                    Subscribe to our newsletter and get <span>10%</span> off
                    your first purchase
                  </p>
                  <form
                    action="mail/mail.php"
                    method="get"
                    target="_blank"
                    class="newsletter-inner"
                  >
                    <input
                      name="EMAIL"
                      placeholder="Your email address"
                      required=""
                      type="email"
                    />
                    <button class="btn">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}