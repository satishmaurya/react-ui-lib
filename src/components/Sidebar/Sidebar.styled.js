import styled, {css} from "styled-components";

export const StyledSideBarWrap = styled.div`
padding-top: 15px;
`
export const StyledSideBarBody = styled.div`
   
`
export const StyledSideBarTitle = styled.div`
 ${props => props.title
     ? css `
    
     border: 1px solid pink;
      `
      : css `
      background: #03A9F4;
      color: #ffffff;
      font-weight: 600;
      padding: 20px;
      ` }, 
      

`;
export const StyledSideBar = styled.div`
    width: 250px;
    height: auto;
    position: fixed;
    z-index: 1;
    top: 0;
    left: auto;
    
     ${props => props.position === 'right'
        ? css `
        left: auto;
        right: 0;
        `
        : props.position === 'left'
        ? css `left: 0;`
        : css ``
     }
     ${props => props.bgColor === 'dark'
        ? css `
        background: #3d454e;color: #fff;
        `
        : props.bgColor === 'light'
        ? css `background: #fff;color: #322f2f;`
        : css ``

     }
    


          
`;
export const MainWrapper = styled.div`
 transition: margin-left .5s;
 padding: 16px;
 height: 600px;
`