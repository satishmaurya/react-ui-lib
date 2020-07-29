import React from "react";
import { StyledAvatar, StyledAvatarText } from './Avatar.styled';

const Avatar = (props) => {
  const { size, src, alt, subTitle, title } = props;
  return (
    <StyledAvatarText>
      <StyledAvatar size={size} src={src} alt={alt} />
      <h4>{title} </h4>
      <p>{subTitle}</p>
    </StyledAvatarText>
  );
}

export default Avatar;