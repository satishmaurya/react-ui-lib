import React from 'react';
import { StyledSwitch, SwitchLabel } from './Switch.styled';

const Switch = (props) => {
const { onClick, size, id, name, label, isBold, color, isChecked } = props;
        return (
            <StyledSwitch>
                { label && 
                <SwitchLabel isBold={isBold} color={color}>
                    {label}
                </SwitchLabel>
                 }
                <label class="switch">
                 { isChecked ? 
                 ( <>
                    <input type="checkbox" id={id} name={name}
                    onClick={onClick} size={size} checked />
                    {/* <span class="slider round"></span> */}
                    </>
                  )
                  : ( <>
                    <input type="checkbox" id={id} name={name}
                    onClick={onClick} size={size}  />
                    </>
                  )
                }
                <span class="slider round"></span>
                </label>
            </StyledSwitch>
        );
    }


export default Switch;