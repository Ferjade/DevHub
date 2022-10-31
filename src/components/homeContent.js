import React from 'react';
import '../assets/homeContent.css';
import BrushIcon from '@mui/icons-material/Brush';
import BusinessIcon from '@mui/icons-material/BusinessCenter';
import SupportIcon from '@mui/icons-material/SupportAgent';

const HomeContent = () => {
  return (
    <div className="container">
        <div className='card1'>
            <div className='content'>
                <div className='title1'>
                  <h2 className='header1'>Find the Best Developers</h2>
                  <div className='subText1'>Meet developers you’re excited to work with
                    <br/>
                    <span>and take your business to new heights.</span>
                  </div>
                  <div className='botContent'>
                    <hr/>
                    <div className='tags'>
                      <span className='icon'><BrushIcon/></span> <span className='iconText'>Access expert talent to fill your skill gaps</span>  
                    </div>
                    <div className='tags'>
                      <span className='icon'><BusinessIcon/></span> <span className='iconText'>Control your workflow: hire, classify and pay your talent</span> 
                    </div>
                    <div className='tags'>
                      <span className='icon'><SupportIcon/></span> <span className='iconText'>Talk with us for end-to-end support</span> 
                    </div>
                  </div>
                  <div className='buttonContainer'>
                    <button type="button">Learn More</button>
                  </div>
                </div>
              <div className='imgContainer1'>
                {/* <img src={Image1} alt=""/> */}
              </div>
            </div>
      </div>
      <div className='card2'>
            <div className='content'>
              <div className='imgContainer2'>
                {/* <img src={Image2} alt=""/> */}
              </div>
              <div className='title2'>
              <h2 className='header2'>Vetted talent</h2>
                  <div className='subText2'>Save your time and focus by only 
                    <br/>
                    <span>reviewing the best candidates.</span>
                  </div>
                  <div className='botContent2'>
                    <hr/>
                    <div className='innerBotContent'>
                      <div className='tags2'>
                        <span>Post a job and hire a pro</span>  
                      </div>
                      <div className='tags2'>
                        <span>Let us help you find the right talent</span> 
                      </div>
                      <div className='tags2'>
                        <span>Browse past projects and testimonials from clients</span> 
                      </div>
                    </div>
                  </div>
              </div>
            </div>
      </div>
    </div>
  )
}

export default HomeContent
