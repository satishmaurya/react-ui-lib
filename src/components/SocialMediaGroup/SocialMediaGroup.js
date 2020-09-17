import React from "react";
import StyledSocialMediaGroup from './SocialMediaGroup.styled';
import Icon from '../Icon/Icon';

const SocialMediaGroup = (props) =>{
    const { name } = props;
    return(
         <StyledSocialMediaGroup className="icon-bar">
            <a href="#" class="facebook"><i class="fa fa-facebook"></i></a> 
            <a href="#" class="twitter"><i class="fa fa-twitter"></i></a> 
            <a href="#" class="google"><i class="fa fa-google"></i></a> 
            <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
            <a href="#" class="youtube"><i class="fa fa-youtube"></i></a> 
         </StyledSocialMediaGroup>
    );
}

export default SocialMediaGroup;