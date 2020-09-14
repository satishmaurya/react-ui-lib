import styled, {css} from "styled-components";

 const StyledBadge = styled.div`

${props => props.bgColor ? css `

& span {
 background-color: ${props.bgColor};
}
 `
 : css `` }
${props => props.color
     ? css 
     `
     & span {
      color: ${props.color};
     } `
      : css `` }  
 


`

export default StyledBadge;