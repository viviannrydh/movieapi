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
            <span>Copy rights</span>
            <span>Logo</span>
            
            <ul className={style.socialIcons}>
                <li><a href="http://www.facebook.com"><img src={facebookLogo} /></a></li>
                <li><a href="http://www.twitter.com"><img src={twitter} /></a></li>
                <li><a href="http://www.youtube.com"><img src={youtubeLogo} /></a></li>
                <li><a href="http://www.instagram.com"><img src={instagramLogo} /></a></li>
                <li><a href="https://www.whatsapp.com/"><img src={whatsupLogo} /></a></li>
            </ul>
            <span>08-12345678</span>
            <span>info@omdb.com</span>
        </div>
    )
}

export default Footer
