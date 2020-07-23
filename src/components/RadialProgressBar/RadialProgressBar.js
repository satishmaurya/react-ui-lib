import React from 'react';
import PropTypes from 'prop-types';
import RadialProgressBar from './RadialProgressBar.styled';

const RadialProgress = (props) => {
  console.log(props, ">>>>>>>>>>>>>>>>>..");
    const { sqsize, strokeWidth, percentage, className, variant } = props;
    const radius = (sqsize - strokeWidth) / 2;
    const viewBox = `0 0 ${sqsize} ${sqsize}`;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - dashArray * percentage / 100;

    return (
      <RadialProgressBar variant={variant}>
        <svg
          width={sqsize}
          height={sqsize}
          viewBox={viewBox}
          className={className}
        >
          <circle
            className="circle-background"
            cx={sqsize / 2}
            cy={sqsize / 2}
            r={radius}
            strokeWidth={`${strokeWidth}px`}
          />
          <circle
            className="circle-progress"
            cx={sqsize / 2}
            cy={sqsize / 2}
            
            r={radius}
            strokeWidth={`${strokeWidth}px`}
            transform={`rotate(-90 ${sqsize / 2} ${sqsize / 2})`}
            style={{
              strokeDasharray: dashArray,
              strokeDashoffset: dashOffset,
            }}
          />
                <text
                  className="circle-text"
                  x="50%"
                  y="49%"
                  dy=".3em"
                  textAnchor="middle"
                >
                  {`${percentage}%`}
                </text>
          
        </svg>
      </RadialProgressBar>
    );
}

RadialProgress.propTypes = {
  sqsize: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
};

export default RadialProgress;
