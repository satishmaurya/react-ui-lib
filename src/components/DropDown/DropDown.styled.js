import styled, {css} from "styled-components";
import * as variable from "../../variable";
import Dropdown from 'react-bootstrap/Dropdown';

const StyledDropDown = styled(Dropdown)`
padding: 6px 16px;
border-radius: 4px;
color: ${variable.white};
${props =>
    props.btnType === "primary"
    ? css `
        background: ${variable.blue};
        border: 1px solid ${variable.blue};
    `
    : props.btnType === "secondary"
       ? css `
        background: ${variable.gray600};
        border: 1px solid ${variable.gray600};

    `
    : props.btnType === "success"
    ? css `
     background: ${variable.green};
     border: 1px solid ${variable.green};
    `
    : props.btnType === "info"
    ? css `
     background: ${variable.cyan};
     border: 1px solid ${variable.cyan};
    `
    : props.btnType === "warning"
    ? css `
     background: ${variable.yellow};
     border: 1px solid ${variable.yellow};
    `
    : props.btnType === "danger"
    ? css `
     background: ${variable.orange};
     border: 1px solid ${variable.orange};
    `
    : props.btnType === "purple"
    ? css `
     background: ${variable.purple};
     border: 1px solid ${variable.purple};
    `
    : props.btnType === "light"
    ? css `
     background: ${variable.gray100};
     border: 1px solid ${variable.gray100};
    `
    : props.btnType === "dark"
    ? css `
     background: ${variable.gray800};
     border: 1px solid ${variable.gray800};
    `
       : css`
            background: transparent;
            border:1px solid transparent;
       `
}
${props =>
    props.disabled
        ? css`
            cursor: not-allowed;
            opacity:0.6;

        `
        : css`
        cursor: pointer;
        `
}
${props =>
    
    props.type === "outlined"
    ? css`
        background: ${variable.white};
    `
    : css`
    `
}
${props =>
    
    props.type === "outlined"
    ? css`
        background: ${variable.white};
    `
    : css`
    `
}

${props =>
    props.rounded === "rounded"
    ? css `
    border-radius: ${variable.btnBorderRadius};
    `
    : css ``
}
${props =>     
props.block === "true"
? css`
display:block;
width:100%;
`
: css`
`
}
${props =>     
props.size === "sm"
? css`
padding: .28rem .8rem;
font-size: .71094rem;
line-height: 1.5;
border-radius: .15rem;
`
:
props.size === "lg"
? css `
padding: .5rem 1rem;
font-size: 1.01563rem;
line-height: 1.5;
border-radius: .15rem;
`
: css`
`
}
    ${props =>     
        props.Iconsize === "sm"
        ? css`
        font-size: 12px;
        `
        :
        props.Iconsize === "md"
        ? css`
        font-size: 14px;
        `
        :
        props.Iconsize === "lg"
        ? css `
        font-size: 16px;
        `
        : css`
        `
        }
svg{
     margin:0 10px;
     font-size:12px;
}
.dropdown-menu.show{
    border:none;
    box-shadow: 0 0 35px 0 rgba(154,161,171,0.3);
}
.dropdown-item{
 padding:.45rem 1.2rem;
 font-weight: 400;
    color: #6c757d;
    text-align: inherit;
    white-space: nowrap;
    font-size: .8125rem;
    text-transform: capitalize;

    svg{
        margin-left:0;
        width:13px;
        height:13px;
        font-weight:300;
    }
}

.dropdown-toggle::after{
    display: none;
  }
  .btn-default{
color:#6c757d;
:focus{
    box-shadow:none;
}
  }


`

export default StyledDropDown;