import styled, {css} from "styled-components";

export const StyledSideBarWrap = styled.div`
padding-top: 15px;
border: 1px solid red;
`
export const StyledSideBarBody = styled.div`
padding-top: 15px;
margin-top: 40px;
`
export const StyledSideBarTitle = styled.div`
padding-top: 15px;

${props =>
    props.titleBg
    ? css `
    background: #ccc;
    `
    : css `
    background-color: #5089de;
    color: #fff;
    font-weight: 600;
    padding: 40px 20px 40px;
    position: absolute;
    width: 100%;
    top: 0px;
    z-index: 1;
    `
}
`
export const StyledSideBar = styled.div`
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
        background: #3d454e;
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
            z-index: 9;
        }
        `
        :css `
        width: 250px;
        height: 100%;
        background: #3d454e;
        color: #fff;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: #3d454e;
        overflow-x: hidden;
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
        color: #302e2e;
        position: fixed;
        z-index: 1;
        top: 0;
        right: 0;
        background: #ffffff;
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
        background: #3d454e;
        color: #fff;
        position: fixed;
        z-index: 1;
        top: 0;
        right: 0;
        background-color: #3d454e;
        overflow-x: hidden;
        transition: 0.5s;
        padding-top: 60px;
        `
    },

`;
export const MainWrapper = styled.div`
 transition: margin-left .5s;
 padding: 16px;
 height: 600px;
`