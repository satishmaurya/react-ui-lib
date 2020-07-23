import React from "react";
import {StyledSideBar, MainWrapper} from './Sidebar.styled';
import Button from '../Button/Button';

const Sidebar = (props) => {
  const { children, id, isDrawer, position, onClose, isCloseButtonShown} = props;

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
        <StyledSideBar id={id} isDrawer {...props}>
            <a className="closeIcon" onClick={handleClose}>&times;</a>
            {children}
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
            <StyledSideBar {...props}>
                {children}
            </StyledSideBar>
        </>
        )
    }
}

export default Sidebar;