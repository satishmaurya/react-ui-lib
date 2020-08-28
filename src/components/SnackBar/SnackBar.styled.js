import styled, {css} from "styled-components";
import * as variable from "../../variable";
import Toast from 'react-bootstrap/Toast'

export const StyledToast = styled(Toast)`
 
  ${props =>
  props.success
  ? css `
    background-color: #23b397;
    border-color: #23b397;
    & .toast-header{
      background-color: #23b397;
      color: #fff;
    }
  `
  :css ``
  }

  ${props =>
    props.error
    ? css `
      background-color: #f0643b;
      & .toast-header{
        background-color: #f0643b;
        color: #fff;
      }
    `
    :css ``
    }
  
` 