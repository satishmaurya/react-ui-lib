import React from 'react';


import '../src/assets/style.css';

function Container(props) {
  return <>{props.story()}</>;
}

export default Container;
