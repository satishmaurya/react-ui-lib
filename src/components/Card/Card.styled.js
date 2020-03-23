import Styled,{css} from "styled-components";
import * as variable from "../../variable";

const StyledCard = Styled.div`
    box-shadow: 0px 0px 2px 1px #ddd;
    border-radius: 4px;
    display:flex;
    flex-wrap:wrap;
    ${props=>
        props.width
        ? css`
            width: ${props.width};
        `
        :css `
            width: 100%;
        `
    }
    ${props=>
        props.alignText
        ? css`
         text-align:${props.alignText};
         justify-content:${props.alignText};
        `
        : css`
            text-align: inherit;
        `
    }
    ${props=>
        props.alignContent
        ? css`
            margin: 0 auto;
        `
        : css`
            margin: auto;
        `
    }
    ${props=>
        props.bgColor
        ? css`
            background-color:${props.bgColor};
        `
        : css`
            background-color: ${variable.ColorWhiteBase};
        `
    }
    ${props=>
        props.color
        ? css`
            color:${props.color};
        `
        : css`
            color: inherit;
        `
    }
    ${props=>
        props.childImg
        ? css`
            img {max-width: 100%;border-radius:4px 4px 0 0};
        `
        :css `
        img {max-width: 100%;border-radius:4px 4px 0 0};
        `
    }
    ${props=>
        props.imgPos==="bg"
        ? css`
            color:${variable.white} !important;
        `
        : css`
            color: inherit;
        `
    }
    h5 {
        font-size:${variable.h5FontSize};
        color:${variable.gray800};
        font-weight:500;
    }
    img {
        max-width:100%;
    }
`;

export default StyledCard;