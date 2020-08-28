import styled, {css} from "styled-components";
import * as variable from "../../variable";
import Modal from 'react-bootstrap/Modal'

export const StyledModal = styled(Modal)`
 
  ${props =>
  props.success
  ? css `
    background-color: #23b397;
    border-color: #23b397;
    
  `
  :css ``
  }

  ${props =>
    props.error
    ? css `
      background-color: #f0643b;
      
    `
    :css ``
    }
  
` 