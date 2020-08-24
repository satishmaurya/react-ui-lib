import React from "react";
import StyledInputGroup from "./InputGroup.styled";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';


const StackInputGroup = (props) =>{
    const {type, as, rows, bsPrefix, disabled, value, rounded, children, size,
        labelBg, icon, placeholder,id, labelText, labelInline,
        inputCheck, radioBtn } = props;
    return(
 
            <StyledInputGroup>
              { labelInline ?
              <InputGroup size={size}> 
                 <InputGroup.Prepend>
                    <InputGroup.Text id={id} placeholder={placeholder}>{labelText}</InputGroup.Text>
                </InputGroup.Prepend> 
                    <Form.Control as={as} rows={rows} bsPrefix={bsPrefix} size={size} {...props} />
              </InputGroup>
              : radioBtn ? <>
                  {/* <InputGroup> */}
                    <InputGroup.Append>
                      <InputGroup.Radio labelText={labelText} />
                    </InputGroup.Append>
                      <Form.Control  as={as} rows={rows} bsPrefix={bsPrefix} size={size} {...props} />
                  {/* </InputGroup> */}
              </>
                : <>
                    <Form.Label>{labelText}</Form.Label> 
                      <Form.Control as={as} rows={rows} bsPrefix={bsPrefix} size={size} {...props} /> 
                  </>
                }
            </StyledInputGroup>
  
          
    );
}

export default StackInputGroup;