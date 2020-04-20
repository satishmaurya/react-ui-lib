import React from 'react';


import '../src/index.css';

function Container(props) {
  return <>{props.story()}</>;
}

export default Container;
