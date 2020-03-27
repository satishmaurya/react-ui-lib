import React from "react";
import StyledTabs from "./Tabs.styled";
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

const StackTabs = (props) =>{
    const{ activeKey, defaultActiveKey, id, mountOnEnter, onSelect, transition, unmountOnExit, variant } =props;
    return(
        <StyledTabs defaultActiveKey={defaultActiveKey} id={id} {...props}>
                        <Tab eventKey="home" title="Home">
fjdkfjdkjdkfdjkf
            </Tab>
            <Tab eventKey="profile" title="Profile">
            fjdkfjdkjdkfdjkf
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
            fjdkfjdkjdkfdjkf
            </Tab>
        </StyledTabs>
    )
}

export default StackTabs;