import styled, {css} from "styled-components";
import * as variable from "../../variable";

const StyledButton = styled.button`
    padding: 6px 16px;
    border-radius: 4px;
    ${props =>
        props.color === "primary"
        ? css `
            background: ${variable.ColorBlue};
            color: ${variable.ColorWhiteBase};
        `
        : props.color === "secondary"
           ? css `
            background: ${variable.ColorRed};
           `
           : css`
                background: ${variable.ColorGrey}
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