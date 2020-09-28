import React from "react";
// import SocialIcon from 'react-social-icons';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram,
    FaPinterestP, FaGithub, FaYoutube, FaLinkedinIn, FaWhatsapp, FaShareAlt,
    FaShare, } from 'react-icons/fa';
// import { RiFacebookFill } from 'react-icons/fa';
// import { MdAlarm } from 'react-icons/md';
import StyledSocialMediaGroup from './SocialMediaGroup.styled';

const SocialMediaGroup = (props) =>{
    const { size, url, faceBook, twitter, gitHub, whatsApp, share,
        linkedIn, youTube, instaGram, gooGle, pInterest, isRound, color, bgColor  } = props;
    return(
        <StyledSocialMediaGroup className="icon-bar" size={size} url={url} color={color}>
            {faceBook && 
                <a href={url}> <FaFacebookF /> </a>
            }
          {/* <a href={url} class="fa fa-facebook"></a>
            <FaFacebookF />
            <FaTwitter />
            <FaGithub />
            <FaGoogle />
            <FaPinterestP /> */}
       </StyledSocialMediaGroup>
      
    );
}

export default SocialMediaGroup;