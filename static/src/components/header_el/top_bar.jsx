import React from 'react';
import {Link} from 'react-router-dom';

function User({setLoginWindow}){

  function showLogin(e){
    console.log('Btn clicked');
    // console.log(props.setLoginWindow);
    setLoginWindow(true)
  }

  if(localStorage.userId){
    return(<li><i class="ti-user"></i> <Link to="#">My account</Link></li>)
  }else{
    return(<li><i class="ti-power-off"></i><Link to="" onClick={showLogin} >Login</Link></li>)
  }
}
export default function Top(props){
  console.log(props.name)
  const setLoginWindow = props.setLoginWindow;
    return (
        <div class="topbar">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-12 col-12">
                <div class="top-left">
                  <ul class="list-main">
                    <li><i class="ti-headphone-alt"></i> +060 (800) 801-582</li>
                    <li><i class="ti-email"></i> support@shophub.com</li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-8 col-md-12 col-12">
                <div class="right-content">
                  <ul class="list-main">
                    <li><i class="ti-location-pin"></i> Store location</li>
                    <li><i class="ti-alarm-clock"></i> <a href="#">Daily deal</a></li>
                    <User setLoginWindow={setLoginWindow}/>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}