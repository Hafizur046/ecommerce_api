import React from 'react';
import Product from './product'
export default function Tab({activeTab}){
    console.log(activeTab)
    return(
        <div
        className="tab-pane fade show active"
        id={activeTab}
        role="tabpanel"
      >
        <div className="tab-single">
          <div className="row">
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
    )
}