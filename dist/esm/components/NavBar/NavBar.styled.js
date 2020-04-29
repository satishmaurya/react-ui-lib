import styled, { css } from "styled-components";
import * as variable from "../../variable";
import Navbar from 'react-bootstrap/Navbar';
const StyledNav = styled(Navbar)`
    padding: 6px 16px;
    border-radius: 4px;
    color: ${variable.white};
   
`;
export default StyledNav;