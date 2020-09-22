import React from "react";
import SocialIcon from 'react-social-icons';
import StyledSocialMediaGroup from './SocialMediaGroup.styled';

const SocialMediaGroup = (props) =>{
    const { size, url } = props;
    return(
         <StyledSocialMediaGroup className="icon-bar" size={size}>
            <SocialIcon url={url} />
         </StyledSocialMediaGroup>
    );
}

export default SocialMediaGroup;