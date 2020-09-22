import React from "react";
import StyledSocialMediaGroup from './SocialMediaGroup.styled';
// import url('/font-awesome-4.6.3/css/font-awesome.min.css');
import Icon from '../Icon/Icon';

const SocialMediaGroup = (props) =>{
    const { size } = props;
    return(
         <StyledSocialMediaGroup className="icon-bar" size={size}>
            <a href="#" class="facebook"><i class="fa fa-facebook"></i></a> 
            <a href="#" class="twitter"><i class="fa fa-twitter"></i></a> 
            <a href="#" class="google"><i class="fa fa-google"></i></a> 
            <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
            <a href="#" class="youtube"><i class="fa fa-youtube"></i></a> 
         </StyledSocialMediaGroup>
    );
}

export default SocialMediaGroup;