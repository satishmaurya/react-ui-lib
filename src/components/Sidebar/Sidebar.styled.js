import styled, {css} from "styled-components";

export const StyledSideBarWrap = styled.div`
padding-top: 15px;
`
export const StyledSideBarBody = styled.div`
    padding-top: 15px;   
    width: 250px;
    margin-top: 40px;
    color: #1d1d1c;
    margin-top: 40px;
    border: 1px solid #e0dede;
`
export const StyledSideBarTitle = styled.div`
padding-top: 15px; 
    background-color: #fff;
    color: #322f2f;
    font-weight: 600;
    padding: 40px 20px 40px;
    position: fixed;
    width: 250px;
    top: 0px;
    z-index: 9;
    height: auto;
${props =>
    props.title
    ? css `
    
    `
    : css `
    
    `
}
${props =>
    props.titleBg
    ? css `
    background: #ccc;
    `
    : css `
    padding-top: 15px;
    background-color: #5089de;
    color: #fff;
    font-weight: 600;
    padding: 40px 20px 40px;
    position: fixed;
    width: 250px;
    top: 0px;
    z-index: 9
    `
}
`
export const StyledSideBar = styled.div`
${props =>
    props.backgroundColor
    ? css `
    background:${props.backgroundColor};
    `
    :css `
    background:#3d454e;
    `
    },

     ${props=>
        props.isDrawer
        ? css`
        height: 100%;
        width: 0;
        color: #fff;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        overflow-x: hidden;
        transition: 0.5s;
        padding-top: 60px;
        .closeIcon {
            position: absolute;
            top: 0;
            right: 25px;
            font-size: 36px;
            margin-left: 50px;
            cursor: pointer;
        }
        `
        :css `
        width: 250px;
        height: 100%;
        color: #fff;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        transition: 0.5s;
        padding-top: 60px;
        
        `
     },
     ${props => 
        props.position === 'left'
        ? css `
        flex-wrap: nowrap
        `
        : props.position === 'right'
        ? css`
        height: 100%;
        width: 0;
        color: #fff;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        overflow-x: hidden;
        transition: 0.5s;
        padding-top: 60px;
        .closeIcon {
            position: absolute;
            top: 0;
            right: 25px;
            font-size: 36px;
            margin-left: 50px;
            cursor: pointer;
        }
        `
        
        :css `
        width: 250px;
        height: 100%;
        color: #fff;
        position: fixed;
        z-index: 1;
        top: 0;
        right: 0;
        overflow-x: hidden;
        transition: 0.5s;
        padding-top: 60px;
        `
    }
`;
export const MainWrapper = styled.div`
 transition: margin-left .5s;
 padding: 16px;
 height: 600px;
`