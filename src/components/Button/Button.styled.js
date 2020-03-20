import styled, {css} from "styled-components";
import * as variable from "../../variable";

const StyledButton = styled.button`
    padding: 6px 16px;
    border-radius: 4px;
    color: ${variable.white};
    ${props =>
        props.color === "primary"
        ? css `
            background: ${variable.blue};
        `
        : props.color === "secondary"
           ? css `
            background: ${variable.gray600};
        `
        : props.color === "success"
        ? css `
         background: ${variable.green};
        `
        : props.color === "info"
        ? css `
         background: ${variable.cyan};
        `
        : props.color === "warning"
        ? css `
         background: ${variable.yellow};
        `
        : props.color === "danger"
        ? css `
         background: ${variable.orange};
        `
        : props.color === "purple"
        ? css `
         background: ${variable.purple};
        `
        : props.color === "light"
        ? css `
         background: ${variable.gray100};
        `
        : props.color === "dark"
        ? css `
         background: ${variable.gray800};
        `
           : css`
                background: ${variable.gray800}
           `
    }
    ${props =>
        props.disabled
            ? css`
                pointer-event:none;
                cursor: default;
            `
            : css`
            cursor: pointer;
            `
    }
    ${props =>
        
        props.variant === "outlined"
        ? css`
            background: transparent;
            border: 1px solid ${variable.ColorGrey}
        `
        : css`
            border:none
        `
    }
`

export default StyledButton;