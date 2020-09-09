import styled, {css} from "styled-components";
import * as variable from "../../variable";
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form'

const StyledSearchBox = styled.div`
${props=>
    props.bg
    ? css`
        background-color: ${props.bg};
        border:0;
    `
    :css `
       
    `
}
${props=>
    props.borderRadius
    ? css`
        border-radius: ${props.borderRadius};
    `
    :css `
       
    `
}
    
`


export default StyledSearchBox;