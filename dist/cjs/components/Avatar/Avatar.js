import React from "react";
import { StyledAvatar } from './Avatar.styled';

const Avatar = props => {
  const {
    size,
    src,
    alt
  } = props;
  return React.createElement(StyledAvatar, {
    size: size,
    src: src,
    alt: alt
  });
};

export default Avatar;