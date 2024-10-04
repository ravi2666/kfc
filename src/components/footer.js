import React from 'react';
import Image from '../images/KFC_Logo.jpg';
import Image2 from '../images/google_play.png'
import Image3 from '../images/apple.png';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";



const Footer = () => {
  return (
   <div className='footer-main'> 
    <div className='footercontent'>  
        <ul>
        <img className='logoimg' src={Image} alt='1'></img>
        </ul>  
         <ul>
            <li>KFC India</li>
            <li>About KFC</li>
            <li> KFC Care</li>
            <li>Careers</li>
            <li> Our Golden Past</li>
            <li> Responsible Disclosure</li>
        </ul>
        <ul>
            
            <li> Legal</li>
            <li> Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Disclaimer</li>
            <li>Caution Notice</li>                                                      
        </ul>
        <ul>
                <li> KFC Food</li>
                <li>Menu</li>
                <li>Order Lookup</li>
                <li>Gift Card</li>
                <li>Drinks</li>
        </ul>
        <ul>
                <li>support </li>
                <li>Get Help</li>
                <li>Contact Us</li>
                <li>KFC Feedback</li>
                <li>Privacy Policy</li>
        </ul>
        
        <ul>
           <FaLocationDot className='FaLocationDot' /><span><li><a className='link' href='https://restaurants.kfc.co.in/kfc-kfc-sholingallur-restaurants-sholinganallur-chennai-179480/Home?utm_source=locator&utm_medium=googleplaces'>Find a KFC</a></li> </span> 
                
        </ul>
        <ul>
            <li><img className='google' src={Image2} alt='1'></img></li>
        </ul>
        <ul>
            <li><img className='apple' src={Image3} alt='1'></img></li>
        </ul>
    </div> 
        <div className="socialmedia">
                      <button className='socialmediaicon1'><span ><FaFacebook className='icon' size={20}  /></span></button>
                      <button className='socialmediaicon2'><span ><FaTwitter  size={20} className='icon' /></span></button>
                      <button className='socialmediaicon3'><span> <FaInstagram size={20} className='icon' /> </span></button>
         </div>
         
     
    </div>
    
  );
};

export default Footer;