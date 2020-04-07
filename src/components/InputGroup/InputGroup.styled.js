import styled, {css} from "styled-components";
import * as variable from "../../variable";
import Form from 'react-bootstrap/Form';

const StyledInputGroup = styled(Form)`

    ${props =>
        props.bg
        ? css `
       
            background: ${variable.gray700} !important;
            border: 1px solid ${props.bg};
          
        `
        : props.color === "secondary"
           ? css `
            background: ${variable.gray600};
            border: 1px solid ${variable.gray600};

        `
        : props.color === "success"
}
`

export default StyledInputGroup;