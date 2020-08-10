import React from "react";
import StyledDropDown from "./DropDown.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const DropDown = (props) => {
const { btnType, id, isDisabled, className, btnVariant,children, rounded,  size, block, Iconsize, icon, iconVariant, options,  } = props;
return (
    
        <StyledDropDown>
            <StyledDropDown.Toggle variant= {btnType} className={className} 
            type={btnVariant} size={size} disabled={isDisabled} rounded={rounded} block={block}
              id= {id} {...props}>
               DropDown
               {icon && iconVariant==='regular' ? <FontAwesomeIcon icon={['far',icon]}
                Iconsize={Iconsize}  /> : iconVariant==='solid' ? <FontAwesomeIcon icon={['fas',icon]}
                Iconsize={Iconsize} /> : <FontAwesomeIcon icon={['fas',icon]} Iconsize={Iconsize}/> }
                {children}
            </StyledDropDown.Toggle>
            <StyledDropDown.Menu>
                {options.map((item, key) => (
                    <StyledDropDown.Item  href={item.link}>{item.item}</StyledDropDown.Item>
                ))}
                
            </StyledDropDown.Menu>
        </StyledDropDown>
                
    );
}

export default DropDown;