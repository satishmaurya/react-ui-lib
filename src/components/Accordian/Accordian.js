import React from "react";
import StyledAccordion from "./Accordian.styled";
import Card from 'react-bootstrap/Card';

const Accordian = (props) =>{
    const{ color, bgColor, children, cardTitle, width, headerText, alignCard, imgUrl, subTitle, imgPos, border} =props;
    return(
        <StyledAccordion imgUrl={imgUrl} color={color} bgColor={bgColor} {...props}>
             <StyledAccordion.Toggle as={Card.Header} variant="link" eventKey="0">
                {headerText}
      </StyledAccordion.Toggle>
      <StyledAccordion.Collapse eventKey="0">
      {children}
    </StyledAccordion.Collapse>
        </StyledAccordion>
    )
}

export default Accordian;