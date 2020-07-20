import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './header.jsx'
import Slider from './home_el/slider'
import Banner from './home_el/smallBanner'
import ProductArea from './home_el/productarea';
import MiddleBanner from './home_el/middleBanner';
import MostPopular from './home_el/mostpopular';
import ShopHomeList from './home_el/shophomelist';
import CountDown from './home_el/countdownarea';
import ShopServices from './home_el/shopservices';
import Newsletter from './home_el/newsletter';
import Modal from './home_el/modal'
function Home(){
    return (
        <div>
            <Slider />
            <Banner />
            <ProductArea />
            <MiddleBanner />
            <MostPopular />
            <ShopHomeList />
            <CountDown />
            <ShopServices />
            <Newsletter />
            <Modal />
        </div>
    );
}

export default Home;