import styled, { css } from "styled-components";

const RadialProgressBar = styled.div`{
        .circle-background,
        .circle-progress {
            fill: none; 
        }
        .circle-background {
            stroke: #ddd;
        }
        .circle-text {
          font-weight: bold;
        }
  ${props =>
    props.strokeColor
      ? css`
        .circle-progress {
            stroke: ${props.strokeColor};
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
       css`
       `
  }

}`;
export default RadialProgressBar;
