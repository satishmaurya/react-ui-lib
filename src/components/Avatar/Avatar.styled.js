import styled, {css} from "styled-components";
import * as variable from "../../variable";

export const StyledAvatarText = styled.div`


${props=> props.color ? css ` color: ${props.color};` : css ``}
`

export const AvatarTitle = styled.div`
${props=> props.titleFont ? css ` font-size: ${props.titleFont};` : css ``}
${props=> props.isBold ? css ` font-weight: ${props.isBold};` : css ``}

`
export const AvatarSubTitle = styled.div`
${props=> props.subTitleFont ? css ` font-size: ${props.subTitleFont};` : css ``}
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