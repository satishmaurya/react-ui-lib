import styled, {css} from "styled-components";
import * as variable from "../../variable";

export const StyledButton = styled.button`
    padding: 6px 16px;
    border-radius: 4px;
    color: ${variable.white};
    ${props =>
        props.color === "primary"
        ? css `
            background: ${variable.blue};
            border: 1px solid ${variable.blue};
        `
        : props.color === "secondary"
           ? css `
            background: ${variable.gray600};
            border: 1px solid ${variable.gray600};

        `
        : props.color === "success"
        ? css `
         background: ${variable.green};
         border: 1px solid ${variable.green};
        `
        : props.color === "info"
        ? css `
         background: ${variable.cyan};
         border: 1px solid ${variable.cyan};
        `
        : props.color === "warning"
        ? css `
         background: ${variable.yellow};
         border: 1px solid ${variable.yellow};
        `
        : props.color === "danger"
        ? css `
         background: ${variable.orange};
         border: 1px solid ${variable.orange};
        `
        : props.color === "purple"
        ? css `
         background: ${variable.purple};
         border: 1px solid ${variable.purple};
        `
        : props.color === "light"
        ? css `
         background: ${variable.gray100};
         border: 1px solid ${variable.gray100};
         color:${variable.gray900};
        `
        : props.color === "dark"
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
        
        props.variant === "outlined"
        ? css`
            background: ${variable.white};
        `
        : css`
        `
    }
    ${props =>
        
        props.variant === "outlined" && props.color === "primary"
        ? css`
            color: ${variable.blue};
        `
        :
        props.variant === "outlined" && props.color === "secondary"
        ? css`
            color: ${variable.gray600};
        `
        :
        props.variant === "outlined" && props.color === "success"
        ? css`
            color: ${variable.green};
        `
        :
        props.variant === "outlined" && props.color === "info"
        ? css`
            color: ${variable.cyan};
        `
        :
        props.variant === "outlined" && props.color === "warning"
        ? css`
            color: ${variable.yellow};
        `
        :
        props.variant === "outlined" && props.color === "danger"
        ? css`
            color: ${variable.orange};
        `
        :
        props.variant === "outlined" && props.color === "purple"
        ? css`
            color: ${variable.purple};
        `
        :   
        props.variant === "outlined" && props.color === "light"
        ? css`
            color: ${variable.gray100};
        `
        :
        props.variant === "outlined" && props.color === "dark"
        ? css`
            color: ${variable.gray800};
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
`
export const ButtonGroup = styled.div`
    padding: 6px 10px;
    ${props =>
        props.BtnGroup === "horizontal"
        ? css `
            display: flex;
            flex-wrap:wrap;
            
        `
        :
        props.BtnGroup === "vertical"
         ?css`
            display:flex;
            flex-direction:column;
        `
        : css`
        `
    }
`

