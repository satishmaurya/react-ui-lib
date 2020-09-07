import React from 'react';
import { StyledSwitch, SwitchLabel } from './Switch.styled';

const Switch = (props) => {
const { onClick, size, id, name, label } = props;
        return (
            <StyledSwitch label={label}>
                { label && <SwitchLabel>{label}</SwitchLabel> }
                <label class="switch">
                    <input type="checkbox" id={id} name={name}
                    onClick={onClick} size={size} />
                    <span class="slider round"></span>
                </label>
            </StyledSwitch>
        );
    }


export default Switch;