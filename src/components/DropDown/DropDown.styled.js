import styled, {css} from "styled-components";
import * as variable from "../../variable";
import Dropdown from 'react-bootstrap/Dropdown';

const StyledDropDown = styled(Dropdown)`
    padding: 6px 16px;
    border-radius: 4px;
    color: ${variable.white};
   
`

export default StyledDropDown;