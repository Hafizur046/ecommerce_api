import React from 'react';



export default function Trendmenu({activeTab, setActiveTab}){
function tap(e){
  setActiveTab(e.target.getAttribute('to'));
}
    return(
        <div className="nav-main">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              data-toggle="tab"
              href="#man"
              role="tab"
              to="man"
              onClick={tap}
              >Man</a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="tab"
              href="#women"
              role="tab"
              to="woman"
              onClick={tap}
              >Woman</a
            >
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="tab"
              href="#kids"
              role="tab"
              to="kids"
              onClick={tap}
              >Kids</a
            >
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="tab"
              href="#accessories"
              role="tab"
              to="accessories"
              onClick={tap}
              >Accessories</a
            >
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="tab"
              href="#essential"
              role="tab"
              to="essential"
              onClick={tap}
              >Essential</a
            >
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="tab"
              href="#prices"
              role="tab"
              to="prices"
              onClick={tap}
              >Prices</a
            >
          </li>
        </ul>
      </div>
    )
}