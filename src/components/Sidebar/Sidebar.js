import React from "react";
import {StyledSideBar, MainWrapper, StyledSideBarBody, StyledSideBarTitle} from './Sidebar.styled';
import Button from '../Button/Button';

const Sidebar = (props) => {
  const { children, id, isDrawer, title,titleBg, backgroundColor, position, onClose, isCloseButtonShown} = props;

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
        {title ?  <>
        <StyledSideBar id={id} backgroundColor={backgroundColor} isDrawer  titleBg={titleBg} position={position}
          onClose={onClose} isCloseButtonShown={isCloseButtonShown}>
            <a className="closeIcon" onClick={handleClose}>&times;</a>
            <StyledSideBarTitle>
              {title}
            </StyledSideBarTitle>
          <StyledSideBarBody>
          {children}
          </StyledSideBarBody>
        </StyledSideBar>
        <MainWrapper id="main">
            <Button onClick={handleOpen} btnType="success">Open</Button>
        </MainWrapper>
    </> :
        <>
           <StyledSideBar id={id} isDrawer>
            <a className="closeIcon" onClick={handleClose}>&times;</a>
            {children}
        </StyledSideBar>
        <MainWrapper id="main">
            <Button onClick={handleOpen} btnType="success">Open</Button>
        </MainWrapper>
        </>
        }
    </>
    )}
    else {
        return(
            <>
            <StyledSideBar {...props}  titleBg={titleBg} title>
            <StyledSideBarTitle>
              {title}
            </StyledSideBarTitle>
          <StyledSideBarBody>
          {children}
          </StyledSideBarBody>
            </StyledSideBar>
        </>
        )
    }
}

export default Sidebar;