import React, {useState} from 'react';
import Trendmenu from './trending/trendmenu'
import Tab from './trending/tab'

export default function ProductArea(){
    const [activeTab, setActiveTab] = useState('man');
    return(
        <div className="product-area section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Trending Item</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="product-info">
                <Trendmenu activeTab={activeTab} setActiveTab={setActiveTab} />
                <div className="tab-content" id="myTabContent">
                  <Tab activeTab={activeTab} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
}