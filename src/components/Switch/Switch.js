import React from 'react';
import StyledSwitch from './Switch.styled';

const Switch = (props) => {
const { onClick, size, id, name } = props;
        return (
            <StyledSwitch>
                <label class="switch">
                    <input type="checkbox" id={id} name={name}
                    onClick={onClick} size={size} />
                    <span class="slider round"></span>
                </label>
            </StyledSwitch>
        );
    }


export default Switch;