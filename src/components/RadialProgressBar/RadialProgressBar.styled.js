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
            background-position-x: initial;
            stroke-linecap: round;
            stroke-linejoin: round;
            animation: ${props => props.animate && css `progress ${props.animationDelay} ${props.animationType}`}
            
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
  ${props =>
    { 
      console.log(props, 'propsssss')
      const { children : { props: { children: sizeVal }}} = props;
      const a = props.children.props.width;
      const strokeSize = sizeVal.map((item) => ({sizeWidth: item.props.strokeWidth, percent: item._owner.memoizedProps.percentage}))
      for( var i =0; i < strokeSize.length; i++) {
        const sub = a-parseInt(strokeSize[i].sizeWidth);
        const radius = sub/2
        const dashArray = radius * Math.PI * 2;
        const finalPercent = strokeSize[i].percent;
        const animateOffset = dashArray - dashArray * finalPercent  / 100
        console.log('animate offset', animateOffset)
        return (
          `
          @keyframes progress {
            from {
                stroke-dashoffset: ${dashArray};
            }
            to {
                stroke-dashoffset: ${animateOffset};
            }
        }
          `
        )
      }
}
}
}`;
export default RadialProgressBar;
