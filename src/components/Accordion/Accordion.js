import React from "react";
import { StyledAccordion } from './Accordion.styled';


const Accordion = (props) => {
  const { size, src, alt, title, subTitle } = props;
  return (
    <StyledAccordion>
     <Accordion defaultActiveKey="0">
      <Accordion.Toggle as variant="link" eventKey="0">
        Click me!
      </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <p>Hello! I'm the body</p>
    </Accordion.Collapse>
    
      <Accordion.Toggle as variant="link" eventKey="1">
        Click me!
      </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
    <p>Hello! I'm the body</p>
    </Accordion.Collapse>
</Accordion>
    </StyledAccordion>
  );
}

export default Accordion;