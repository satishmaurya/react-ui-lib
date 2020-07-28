import styled, { css } from "styled-components";

const RadialProgressBar = styled.div`{
        .circle-background,
        .circle-progress {
            fill: none; 
        }
        .circle-background {
            stroke: #ddd;
        }
  ${props =>
    props.variant === "primary"
      ? css`
        .circle-progress {
            stroke: #1EA7FD;
            background-position-x: initial;;
            stroke-linecap: round;
            stroke-linejoin: round;
        }
        .stackui-radialProgress{
              border-radius: 50%;
              background: #fff;
              font-size: 18px;
              font-weight: 600;
              align-items: center;
              justify-content: center;
              display: flex;
              flex-direction: column;
          }
        `
        :
      props.variant === "success"
       ? css`
       .circle-progress { 
         stroke: #3e9d3e;
       }
       .stackui-radialProgress{
              border-radius: 50%;
              background: #fff;
              font-size: 18px;
              font-weight: 600;
              align-items: center;
              justify-content: center;
              display: flex;
              flex-direction: column;
          }
       `
      : css`
      .circle-background,
        .circle-progress {
            fill: none; 
            stroke: #1EA7FD;
        }
      
        `
  }

}`;
export default RadialProgressBar;
