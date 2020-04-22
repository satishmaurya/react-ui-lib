import styled, {css} from "styled-components";
import * as variable from "../../variable";

export const StyledAvatar = styled.img`
  vertical-align: middle;
  border-radius: 9999px;
  ${props =>
  props.size === 'sm'
  ? css `
  height: 35px;
  width: 35px;
  `
  : props.size === 'lg'
  ? css `
  height: 75px;
  width: 75px;
  `
  : css `
  height: 50px;
  width: 50px;
  `
  }
  
`