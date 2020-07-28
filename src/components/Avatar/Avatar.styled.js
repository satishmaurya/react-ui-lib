import styled, {css} from "styled-components";
import * as variable from "../../variable";

export const StyledAvatarText = styled.div`
padding-top: 15px;
    h4 {
      font-size: 1.2rem;
      padding: 12px 0px 0;
  },
  p {
    font-size: 1rem;
}
`
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