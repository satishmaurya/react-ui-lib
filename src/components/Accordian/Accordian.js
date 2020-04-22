import React from "react";
import StyledAccordion from "./Accordian.styled";
import Card from 'react-bootstrap/Card';

const Accordian = (props) =>{
    const{ color, bgColor, children, cardTitle, width, alignText, alignCard, imgUrl, subTitle, imgPos, border} =props;
    return(
        <StyledAccordion imgUrl={imgUrl} color={color} bgColor={bgColor} {...props}>
             <StyledAccordion.Toggle variant="link" eventKey="0">
        Click me!
      </StyledAccordion.Toggle>
      <StyledAccordion.Collapse eventKey="0">
      <div>Hello! I'm the body</div>
    </StyledAccordion.Collapse>
        </StyledAccordion>
    )
}

export default Accordian;