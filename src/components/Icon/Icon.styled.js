import styled, {css} from "styled-components";
import * as variable from "../../variable";

const StyledIcon = styled.span`
${props =>
    props.onClick
    ? css `
    cursor: pointer;
    `
       : css`
       cursor: auto;   
    `
}
        
`

export default StyledIcon;