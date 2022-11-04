import React from 'react'
import '../assets/footer.css'
import Image from '../assets/DevHub-removebg.png'
import WorkspaceIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import DesignIcon from '@mui/icons-material/DesignServices';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
      <div className="footerContainer">
        <div className="logoContainer">
          <div className='logo'><Link to="/DevHub"><img src={Image} alt='DevHub logo'/></Link></div>
          <div className='tags'>
              <div className='Icon'><WorkspaceIcon sx={{fontSize: 'inherit'}}/></div>
              <div className='footTag'>Lorem, ipsum dolor</div>
              <div className='Icon'><DesignIcon sx={{fontSize: 'inherit'}}/></div>
              <div className='footTag'>Lorem, ipsum dol</div>
              <div className='Icon'><TimelapseIcon sx={{fontSize: 'inherit'}}/></div>
              <div className='footTag'>Lorem, ipsum</div>
          </div>
          <div className='copyrightContainer'>
            <p>© 2022 DevHub - All Rights Reserved</p>
          </div>
        </div>
        <div className="linksContainer">
            <table>
              <thead>
                <tr>
                  <th>Help</th>
                  <th>Legal Info</th>
                  <th>Follow us</th>
                </tr>
                </thead>
              <tbody>
              <tr>
                  <td><a href="" className='test'>FAQ</a></td>
                  <td><a href="" className='test'>Privacy Policy</a></td>
                  <td><a href="" className='test'>Instagram</a></td>
                </tr>
                <tr>
                  <td><a href="" className='test'>About Us</a></td>
                  <td>Terms &</td>
                  <td><a href="" className='test'>Facebook</a></td>
                </tr>
                <tr>
                  <td><a href="" className='test'>Contact Us</a></td>
                  <td><a href="" className='test'>Conditions</a></td>
                  <td></td>
                </tr>
                <tr>
                  <td><a href="" className='test'>Meet the Team</a></td>
                  <td><a href="" className='test'>Cookie Policy</a></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
  )
}

export default Footer
