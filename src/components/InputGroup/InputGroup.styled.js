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
${props => props.disabled 
    ? css ` 
    cursor: not-allowed;
     & label {
      cursor: not-allowed !important;
      }
      & input {
        cursor: not-allowed !important;
        }
  `
  : css `` }

  ${props => props.error 
    ? css ` 
     & input {
        box-shadow: rgb(181, 39, 29) 0px 1px 0px 0px inset;
        background: rgb(248, 217, 215);
     }
     & .input-group-text {
        box-shadow: rgb(181,39,29) 0px 1px 0px 0px inset;
        background: rgb(248,217,215);
    }
  `
  : css `` }
`

export default StyledInputGroup;
