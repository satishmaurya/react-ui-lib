/* eslint-disable no-unused-expressions */
import React from "react";
import {StyledSideBar, MainWrapper, StyledSideBarBody, StyledSideBarTitle} from './Sidebar.styled';
import Button from '../Button/Button';

const Sidebar = (props) => {
  const { children, id, isDrawer, title,titleBg, bgColor, position, onClose, isCloseButtonShown} = props;
  // {{'backgroundColor': status === 'approved' ? 'blue' : status === 'pending' ? 'black' : 'red'}}
  const handleOpen = () => {
    document.getElementById("Sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  const handleClose = () => {
    document.getElementById("Sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
  
  return(
    <StyledSideBar id={id} title={title} position={position} {...props}>
      {
        title ? 
        (
            <StyledSideBar>
            <StyledSideBarTitle>
              {title}
            </StyledSideBarTitle>
          <StyledSideBarBody>
          {children}
          </StyledSideBarBody>
           </StyledSideBar>
        ) 
        :
        isDrawer ==='true' 
        ? (
          <>
          <StyledSideBar id={id} isDrawer>
           <a className="closeIcon" onClick={handleClose}>&times;</a>
           {children}
       </StyledSideBar>
       <MainWrapper id="main">
           <Button onClick={handleOpen} btnType="success">Open</Button>
       </MainWrapper>
       </>
        ) 
        :  
        <StyledSideBar {...props}>
        {children}
    </StyledSideBar>
      }
    </StyledSideBar>
  )
  
    }
/* ============As for now drawer functionality is on hold==============*/

/*const handleOpen = () => {
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
           <StyledSideBar id={id} isDrawer>
            <a className="closeIcon" onClick={handleClose}>&times;</a>
            {children}
        </StyledSideBar>
        <MainWrapper id="main">
            <Button onClick={handleOpen} btnType="success">Open</Button>
        </MainWrapper>
        </>
    )}   */


export default Sidebar;