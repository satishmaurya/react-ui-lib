import React from "react";
import SocialIcon from 'react-social-icons';
import StyledSocialMediaGroup from './SocialMediaGroup.styled';

const SocialMediaGroup = (props) =>{
    const { size, url, network } = props;
    return(
        <StyledSocialMediaGroup className="icon-bar" size={size}>
            {/* hellooo
            <SocialIcon network={network} /> */}
       </StyledSocialMediaGroup>
      
    );
}

export default SocialMediaGroup;