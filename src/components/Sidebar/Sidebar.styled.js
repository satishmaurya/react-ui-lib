import styled, {css} from "styled-components";

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
     }
`;
export const MainWrapper = styled.div`
 transition: margin-left .5s;
 padding: 16px;
 height: 600px;
`