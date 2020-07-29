import React from "react";
import {StyledSideBar, MainWrapper, StyledSideBarBody, StyledSideBarTitle} from './Sidebar.styled';
// import { Button } from '../index';
import Button from '../Button/Button';
// import Typography from '../Typography/Typography';

const Sidebar = (props) => {
  const { children, id, isDrawer, title,titleBg, position, onClose, isCloseButtonShown} = props;

  const handleOpen = () => {
    document.getElementById("Sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  const handleClose = () => {
    document.getElementById("Sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  if(isDrawer===true){
    return(
        <>
        <StyledSideBar id={id} hello={title} isDrawer {...props}>
            <a className="closeIcon" onClick={handleClose}>&times;</a>
            {/* {children} */}
            <StyledSideBarTitle>
              {title}
            </StyledSideBarTitle>
          <StyledSideBarBody>
          {children}
          </StyledSideBarBody>
        </StyledSideBar>
        <MainWrapper id="main">
            <h2>SideBar</h2>
            <Button onClick={handleOpen} btnType="success">Open</Button>
        </MainWrapper>
    </>
    )}
    else {
        return(
            <>
            <StyledSideBar>
                {children}
            </StyledSideBar>
        </>
        )
    }
}

export default Sidebar;