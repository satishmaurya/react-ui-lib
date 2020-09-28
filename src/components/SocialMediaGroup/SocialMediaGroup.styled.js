import styled, {css} from "styled-components";

const StyledSocialMediaGroup = styled.div`

${props=> props.color ? css `
    a {
        color: ${props.color};
        height: 2rem;
        width: 2rem;
        line-height: calc(2rem - 4px);
        display: flex;
        border: 2px solid;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
    }
` : css ``}
${props=> props.size ? css `
    a {
        font-size: ${props.size};
    }
 `
  : css ``}

 ${props => props.isRound ? css `
 border: 1px solid green;
 &.icon-bar a {
        height: 2rem;
        width: 2rem;
        line-height: calc(2rem - 4px);
        display: flex;
        border: 2px solid;
        border-radius: 50%;
        align-items: center;
        justify-content: center; 
    }
 `
 : css `` }



`
export default StyledSocialMediaGroup;