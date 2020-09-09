import styled, {css} from "styled-components";

const StyledSearchBox = styled.div`
input {
    padding: 6px ;
}


${props => props.border ? css `
& input {
border: ${props.border};
}
`: css `` } 
${props => props.onFocus ? css `
& input {
    & focus{
        box-shadow: ${props.onFocus};
    }
}
`: css `` } 

${props=>
    props.bg
    ? css`
    & input {
        background-color: ${props.bg};
        }
    `
    :css `
       
    `
}
${props=>
    props.borderRadius
    ? css`
    & input {
        border-radius: ${props.borderRadius};
    }
        `
    :css `
       
    `
}
    
`


export default StyledSearchBox;