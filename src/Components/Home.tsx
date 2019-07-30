import React from 'react'
import Header from './Common/Header';
//import Sidebar from './Common/Sidebar';
import Footer from './Common/Footer';

function Home() {
    return (
        <div>   
        <Header />
        <div className="container-fluid">
          <div className="row content">
          <div className="col-sm-3 sidenav">
            <br/>
            <div className="row pl-13">
                <div className="col-md-3 border_clas">
                    <span>Choice</span>
                </div>
                <div className="col-md-3 border_clas">
                    <span>Order</span>
                </div>
                <div className="col-md-3 border_clas">
                    <span>Match</span>
                </div>
            </div>
            <div className="row pl-13">
                <div className="col-md-3 border_clas">
                    <span>Slider</span>
                </div>
                <div className="col-md-3 border_clas">
                    <span>Extended Text</span>
                </div>
                <div className="col-md-3 border_clas">
                    <span>File Upload</span>
                </div>
            </div>
            

        </div>
            <div className="col-sm-9">
              <h4 className="border_dot"><small>Drag Required Questions from left to right here</small></h4>
              <hr />
            </div>
        </div>
        </div>
            <Footer />
        </div>
    )
}

export default Home
