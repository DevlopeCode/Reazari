import React, { Component } from 'react';
import ReactPlayer from 'react-player/youtube'
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class VideoV3 extends Component {



    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'


    return <div className="video-area margin-top-80" 
    style={{ margin:"100px 10px 10px 100px" }}
    >
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-md-12">
              <ReactPlayer url='https://www.youtube.com/watch?v=R3bC0ThQ2pM' controls={true} height={600} width={1200} />
                {/* <div className="video-content padding-150" style={{background: 'url("'+publicUrl+'assets/img/others/video3.png") no-repeat center center/cover'}}>
                  <h4>Exclusive Collection</h4>
                  <h2>Get 30% Off</h2>
                  <a href="https://www.youtube.com/watch?v=R3bC0ThQ2pM" target="_blank" className="video-btn-style-02"><i className="fa fa-play" /></a>
                </div> */}
              </div>
            </div>
          </div>
        </div>


        }
}

export default VideoV3