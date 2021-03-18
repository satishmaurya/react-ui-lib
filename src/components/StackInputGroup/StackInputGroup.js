import React from "react";
import StyledInputGroup from "./StackInputGroup.styled";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import {Icon} from '../Icon';

const StackInputGroup = (props) =>{
    const {type, as, rows, bsPrefix, disabled, value, rounded, children, size,
        labelBg, iconAS, iconVariant, iconSize, placeholder, id, labelText, labelInline, isError, hint
    } = props;
    return(
      <> 

        <StyledInputGroup disabled={disabled} isError={isError} hint={hint}>
        {iconAS && <Icon icon={icon} color={iconVariant} iconSize={iconSize} />}

        { labelInline ?
          <InputGroup size={size}> 
            <InputGroup.Prepend>
           
                    <InputGroup.Text id={id} placeholder={placeholder} >{labelText}</InputGroup.Text>
                </InputGroup.Prepend> 
                    <Form.Control as={as} rows={rows} bsPrefix={bsPrefix} size={size} {...props} />
              </InputGroup>
                : <>
                    <Form.Label>{labelText}</Form.Label> 
                      <Form.Control as={as} rows={rows} bsPrefix={bsPrefix} size={size} {...props} /> 
                      {isError && <p>{hint}</p>}
                  </>
          }
             </StyledInputGroup>
  
     </>     
    );
}

export default StackInputGroup;