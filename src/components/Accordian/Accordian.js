import React from "react";
import StyledAccordion from "./Accordian.styled";

const Accordian = (props) =>{
    const{ color, bgColor, children, cardTitle, width, alignText, alignCard, imgUrl, subTitle, imgPos, border} =props;
    return(
        <StyledAccordion imgUrl={imgUrl} color={color} bgColor={bgColor} {...props}>
         {children} 
        </StyledAccordion>
    )    
}

export default Accordian;