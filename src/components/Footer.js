import React from 'react'
import style from './MovieAPI.module.css'
import facebookLogo from '../icons/facebook.png'
import instagramLogo from '../icons/instagram-icon.jpeg'
import youtubeLogo from '../icons/YouTube-icon.png'
import whatsupLogo from '../icons/whatsapp-icons.jpeg'
import twitter from '../icons/twitter-icon.png'
function Footer() {
    return (
        <div className={style.footer}>
            <div>
                <h5>Information</h5>
                <p>Customer service</p>
                <p>Terms and Conditions</p>
                <p>Right of withdrawal</p>
                <p>Cookies</p>
            </div>
            <ul className={style.socialIcons}>
                <li><a href="http://www.facebook.com"><img src={facebookLogo} alt="Facebook"/></a></li>
                <li><a href="http://www.twitter.com"><img src={twitter} alt="Twitter"/></a></li>
                <li><a href="http://www.youtube.com"><img src={youtubeLogo} alt="Youtube"/></a></li>
                <li><a href="http://www.instagram.com"><img src={instagramLogo} alt="Instagram"/></a></li>
                <li><a href="https://www.whatsapp.com/"><img src={whatsupLogo} alt="Whatsup"/></a></li>
            </ul>
            <div>
                <p></p>
                <p>08-12345678</p>
                <p>info@omdb.com</p>
                <p>
                        stockholmvägen 12,
                        10000 Stockholm
                </p>
            </div>
            
        </div>
    )
}

export default Footer
