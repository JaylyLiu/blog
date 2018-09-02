import React from 'react';
import image from '../images';
import './Footer.css';

class Footer extends React.Component{
  state={}
  render() {
    return (
      <footer className="footer">
       <div className="footer-imgs">
          <img src={image.download1} alt="download1" width="25" height="25"/>
          <img src={image.download2} alt="download2" width="25" height="25"/>
          <img src={image.download3} alt="download3" width="25" height="25"/>
          <img src={image.download4} alt="download4" width="25" height="25"/>
          <img src={image.download5} alt="download5" width="25" height="25"/>
          <img src={image.download6} alt="download6" width="25" height="25"/>
          <img src={image.download7} alt="download7" width="25" height="25"/>
       </div>
       <div className="footer-co">
          <hr/>
          <span>
            <pre>
             © 2017 italki HK Limited.  About  Press  Contact  Support  Blog  Stories  Jobs  Terms  Privacy
            </pre>
          </span>
          
         
          
  
       </div>
      </footer>
    );
  }
}


export default Footer;