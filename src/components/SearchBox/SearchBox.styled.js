import styled, {css} from "styled-components";

const StyledSearchBox = styled.div`

input {
    padding: 6px ;
    transition: all 0.5s ease;
}


${props => props.border ? css `
& input {
border: ${props.border};
}
`: css `` } 
${props => props.onFocus ? css `
input {
    &:focus {
        box-shadow: 0 0 3px rgb(212, 222, 225);
        border: 1.8px solid rgb(210, 208, 208);
        outline: 0;
        transition: all 0.5s ease;
    } }`

    : css `` } 

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
${props =>
    props.icon
        ? css`
       & .abx {
        color: #ada8a8;
        position: relative;
        left: -20px;
        border: 1px solid orange;
        }
        `
        : css`  `
}

   
`


export default StyledSearchBox;