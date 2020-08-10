import React from "react";
import {StyledRow,StyledCol,StyledContainer} from "./Layout.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = (props) =>{
    const {as, fluid, bsPrefix, children} = props;
    return(
        <StyledContainer as={as} {...props}>
            {children}
        </StyledContainer>
    );
};

export const Row = (props) =>{
    const {as, lg, md, noGutters, sm, xl, xs, bsPrefix, children} = props;
    return(
        <StyledRow as={as} {...props}>
            {children}
        </StyledRow>
    );
};

export const Col = (props) =>{
    const {as, lg, md, noGutters, sm, xl, xs, bsPrefix, children} = props;
    return(
        <StyledCol as={as} {...props}>
            {children}
        </StyledCol>
    );
};
