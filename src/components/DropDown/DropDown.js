import React from "react";
import StyledDropDown from "./DropDown.styled";
import {Icon} from '../Icon';


const DropDown = (props) => {
const { btnType, id,  value, isDisabled, className, btnVariant, children, rounded,  size, block, Iconsize, icon,  iconVariant, options,  } = props;
return (
    
        <StyledDropDown>
            <StyledDropDown.Toggle variant= {btnType}  className={className} type={btnVariant}  size={size} disabled={isDisabled} rounded={rounded} block={block}  id= {id} {...props}>
               {value}
              <Icon icon={icon}></Icon>
                {children}
            </StyledDropDown.Toggle>
            <StyledDropDown.Menu>
                {options.map((item, key) => (
                    <StyledDropDown.Item 
                     href={item.link}>
                         <Icon icon={item.icon} />
                         {item.item}
                         </StyledDropDown.Item>
                ))}
                
            </StyledDropDown.Menu>
        </StyledDropDown>
                
    );
}

export default DropDown;