import styled, {css} from "styled-components";
import * as variable from "../../variable";
import Dropdown from 'react-bootstrap/Dropdown';

const StyledDropDown = styled(Dropdown)`
padding: 6px 16px;
border-radius: 4px;
varient: ${variable.white};
${props =>
    props.varient === "primary"
    ? css `
        background: ${variable.blue};
        border: 1px solid ${variable.blue};
    `
    : props.varient === "secondary"
       ? css `
        background: ${variable.gray600};
        border: 1px solid ${variable.gray600};

    `
    : props.varient === "success"
    ? css `
     background: ${variable.green};
     border: 1px solid ${variable.green};
    `
    : props.varient === "info"
    ? css `
     background: ${variable.cyan};
     border: 1px solid ${variable.cyan};
    `
    : props.varient === "warning"
    ? css `
     background: ${variable.yellow};
     border: 1px solid ${variable.yellow};
    `
    : props.varient === "danger"
    ? css `
     background: ${variable.orange};
     border: 1px solid ${variable.orange};
    `
    : props.varient === "purple"
    ? css `
     background: ${variable.purple};
     border: 1px solid ${variable.purple};
    `
    : props.varient === "light"
    ? css `
     background: ${variable.gray100};
     border: 1px solid ${variable.gray100};
    `
    : props.varient === "dark"
    ? css `
     background: ${variable.gray800};
     border: 1px solid ${variable.gray800};
    `
       : css`
            background: ${variable.gray800}
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
    
    props.type === "outlined" && props.varient === "primary"
    ? css`
        varient: ${variable.blue};
    `
    :
    props.type === "outlined" && props.varient === "secondary"
    ? css`
        varient: ${variable.gray600};
    `
    :
    props.type === "outlined" && props.varient === "success"
    ? css`
        varient: ${variable.green};
    `
    :
    props.type === "outlined" && props.varient === "info"
    ? css`
        varient: ${variable.cyan};
    `
    :
    props.type === "outlined" && props.varient === "warning"
    ? css`
        varient: ${variable.yellow};
    `
    :
    props.type === "outlined" && props.varient === "danger"
    ? css`
        varient: ${variable.orange};
    `
    :
    props.type === "outlined" && props.varient === "purple"
    ? css`
        varient: ${variable.purple};
    `
    :   
    props.type === "outlined" && props.varient === "light"
    ? css`
        varient: ${variable.gray100};
    `
    :
    props.type === "outlined" && props.varient === "dark"
    ? css`
        varient: ${variable.gray800};
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
.dropdown-toggle::after{
    display: none;
  }


`

export default StyledDropDown;