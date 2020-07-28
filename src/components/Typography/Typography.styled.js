import styled, { css } from "styled-components";

const Typography = styled.div`{
  display: block;
  margin-left: 0;
  margin-right: 0;
  ${props =>
  props.type === "heading"
  ? css `
  font-weight: bold;
  `
  :
  props.type === "subHeading"
  ? css `
  font-weight: 600;
  `
  :
  props.type === "light"
  ? css `
  font-weight: 300;
  `
  : css `
  font-weight: normal;
  `
  }
  
  ${props =>
  props.isBold
  ? css `
  font-weight: bold;
  `
  : css `font-weight: normal;`
  }

  ${props =>
  props.isItalic
  ? css `
  font-style: italic;
  `
  : css `font-style: normal;`
  }

  ${props => 
  props.as === "h1"
  ? css `
  font-size: 2em;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
  `
  :
  props.as === "h2"
  ? css `
  font-size: 1.5em;
  margin-top: 0.83em;
  margin-bottom: 0.83em;
  `
  :
  props.as === "h3"
  ? css `
  font-size: 1.17em;
  margin-top: 1em;
  margin-bottom: 1em;
  `
  :
  props.as === "h4"
  ? css `
  font-size: 1em;
  margin-top: 1.33em;
  margin-bottom: 1.33em;
  `
  :
  props.as === "h5"
  ? css `
  font-size: .83em;
  margin-top: 1.67em;
  margin-bottom: 1.67em;
  `
  :
  props.as === "h6"
  ? css `
  font-size: .67em;
  margin-top: 2.33em;
  margin-bottom: 2.33em;
  `
  :css `
  font-size: 1em;
  `
  }
}`;
export default Typography;
