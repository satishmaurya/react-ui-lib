import React, { Component } from 'react';
import StyledSwitch from './Switch.styled';

class Switch extends Component {
    render() {
        return (
            <StyledSwitch>
               <label class="switch">
  <input type="checkbox" />
  <span class="slider round"></span>
</label>
            </StyledSwitch>
        );
    }
}

export default Switch;