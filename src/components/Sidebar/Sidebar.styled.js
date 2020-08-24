import styled, {css} from "styled-components";

export const StyledSideBar = styled.div`
  position: fixed;
    top: 0px;
    left: 0px;
    z-index: 101;
    height: 100vh;
    width: 250px;
    padding: 10px;
    overflow: auto;
    ${props => props.background ? css ` background: ${props.background};`: css `` }
    ${props => props.color ? css ` color: ${props.color};`: css `` }
    
<<<<<<< HEAD
    ${props => props.position ==='right' 
=======
    ${props => props.position ==='right'
>>>>>>> f193e5df52527eff11d9c92cc89edc3f384ecb7d
       ? css `
       left: auto;
       right: 0;
        `
        : css `  ` }

`