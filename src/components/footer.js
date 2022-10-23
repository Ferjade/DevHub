import React from 'react'
import '../assets/footer.css'
import Image from '../assets/DevHub-removebg.png'
import WorkspaceIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import DesignIcon from '@mui/icons-material/DesignServices';
import TimelapseIcon from '@mui/icons-material/Timelapse';

const Footer = () => {
  return (
      <div class="footerContainer">
        <div class="logoContainer">
          <div class='logo'><img src={Image} alt='DevHub logo'/></div>
          <div class='tags'>
              <div class='Icon'><WorkspaceIcon sx={{fontSize: 'inherit'}}/></div>
              <div class='footTag'>Lorem, ipsum dolor</div>
              <div class='Icon'><DesignIcon sx={{fontSize: 'inherit'}}/></div>
              <div class='footTag'>Lorem, ipsum dol</div>
              <div class='Icon'><TimelapseIcon sx={{fontSize: 'inherit'}}/></div>
              <div class='footTag'>Lorem, ipsum</div>
          </div>
          <div class='copyrightContainer'>
            <p>© 2022 DevHub - All Rights Reserved</p>
          </div>
        </div>
        <div class="linksContainer">
            <table>
                <tr>
                  <th>Help</th>
                  <th>Legal Info</th>
                  <th>Follow us</th>
                </tr>
              <tbody>
              <tr>
                  <td>FAQ</td>
                  <td>Privacy Policy</td>
                  <td>Instagram</td>
                </tr>
                <tr>
                  <td>About Us</td>
                  <td>Terms & Conditions</td>
                  <td>Facebook</td>
                </tr>
                <tr>
                  <td>Contact Us</td>
                  <td>Cookie Policy</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Meet the Team</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
  )
}

export default Footer
