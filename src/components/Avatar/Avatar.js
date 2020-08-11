import React from "react";
import { StyledAvatar, StyledAvatarText } from './Avatar.styled';

const Avatar = (props) => {
  const { size, src, alt, avatarName, avatarTitle } = props;
  return (
    <StyledAvatarText>
      <StyledAvatar size={size} src={src} alt={alt} >
      </StyledAvatar>
      <h4>{avatarTitle} </h4>
      <p>{avatarName}</p>
    </StyledAvatarText>
  );
}

export default Avatar;