import React from "react";
import { StyledAvatar, StyledAvatarText, AvatarTitle, AvatarSubTitle } from './Avatar.styled';
import Typography from "../Typography/Typography.styled";

const Avatar = (props) => {
  const { size, src, alt, title, subTitle, titleFont, subTitleFont, color, isBold } = props;
  return (
    <StyledAvatarText {...props}>
      <StyledAvatar size={size} src={src} alt={alt} >
      </StyledAvatar>
     { title && <AvatarTitle titleFont={titleFont} isBold={isBold} >
        {title}
       </AvatarTitle>}
      { subTitle && <AvatarSubTitle subTitleFont={subTitleFont}>
        {subTitle}
      </AvatarSubTitle> }
    </StyledAvatarText>
  );
}

export default Avatar;