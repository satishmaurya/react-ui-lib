import styled, {css} from "styled-components";

const StyledSearchBox = styled.div`

input {
    padding: 6px ;
    transition: all 0.5s ease;
}
 position:relative;
 display:inline-block;

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
    :css ` `
}
${props=>
    props.borderRadius
    ? css`
    & input {
        border-radius: ${props.borderRadius};
    }
        `
    :css `  `
}
${props => props.disabled 
    ? css ` 
    cursor: not-allowed;
     & label {
      cursor: not-allowed !important;
      }
      & input {
        cursor: not-allowed !important;
        }
  `
  : css `` }

  ${props => props.isError 
    ? css ` 
     & input {
        background: rgb(248,217,215);
        border: 1px solid #d00f0f;
     }
     & p {
        padding: 5px 8px;
        color: #d00f0f;
     }
  `
  : css `` }

  ${props => props.width ? css `
    width: ${props.width};
        & input {
        width: 100%;
        }
    `: css `` } 

.icon-search input {
    padding-left: 30px;
}
`


export default StyledSearchBox;