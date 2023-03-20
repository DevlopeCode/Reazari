import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class About extends Component {



    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="about-content margin-top-80">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-5">
			        <div className="content-left">
			          <h3>We take fashion personally &amp; we bring you happiness</h3>
			          <p>REDZARI innovated casing multiple contrivers under one roof and is the best- known developer store in India. The idea began in 2016 with the idea of showcasing exquisite artificer and design in India. With an miscellaneous range of hand- picked styles ranging from marriage Trousseau, Handcrafted Jewellery for all your wardrobe needs.</p>
			          <span>Redzari</span>
			        </div>
			      </div>
			      <div className="col-lg-7">
			        <div className="thumb">
			          {/* <img src={publicUrl+"assets/img/others/about.png" }alt="" /> */}
					  <ReactPlayer url='https://www.youtube.com/watch?v=R3bC0ThQ2pM' controls={false} />

					  
			          {/* video button */}
			          {/* <div className="video-btn-style-01">
			            <a href="#"><i className="fa fa-play" /></a>
			          </div> */}
			        </div>
			      </div>
			    </div>
			  </div>
			</div>

        }
}

export default About