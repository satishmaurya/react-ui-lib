/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import StyledCard from "./Card.styled";

const Card = (props) => {
    const{ color, bgColor, children, cardTitle, width, alignText, alignCard, imgUrl, subTitle, imgPos, border,
    boxShadow} =props;
    if(imgPos==="middle"){
    return(
        <StyledCard imgUrl={imgUrl} color={color} bgColor={bgColor}
         border={border} {...props}>
            <StyledCard.Body>
            <StyledCard.Title as="h5">{cardTitle}</StyledCard.Title>
            <StyledCard.Subtitle as="h6" className="text-muted">{subTitle}</StyledCard.Subtitle>
            </StyledCard.Body>
            <img src={imgUrl}  />
            <StyledCard.Body>
            <StyledCard.Text>{children}</StyledCard.Text>
            </StyledCard.Body>
        </StyledCard>
    )
    }
    else if (imgPos==="top") {
        return(
            <StyledCard imgUrl={imgUrl} color={color} bgColor={bgColor} {...props}>
                <img src={imgUrl} />
                <StyledCard.Body>
                <StyledCard.Title as="h5">{cardTitle}</StyledCard.Title>
                <StyledCard.Subtitle as="h6">{subTitle}</StyledCard.Subtitle>
                <StyledCard.Text>{children}</StyledCard.Text>
                
                </StyledCard.Body>
            </StyledCard>
        )
    }
    else if (imgPos==="bottom") {
        return(
            <StyledCard imgUrl={imgUrl} color={color} bgColor={bgColor} {...props}>
                <StyledCard.Body>
                <StyledCard.Title as="h5">{cardTitle}</StyledCard.Title>
                <StyledCard.Subtitle as="h6">{subTitle}</StyledCard.Subtitle>
                <StyledCard.Text>{children}</StyledCard.Text>
                </StyledCard.Body>
                <img src={imgUrl} />
            </StyledCard>
        )
    }
        else if (imgPos==="bg") {
        return(
            <StyledCard imgUrl={imgUrl} color={color} bgColor={bgColor} {...props}>
            <img src={imgUrl} />
            <StyledCard.ImgOverlay>
            <StyledCard.Title as="h5">{cardTitle}</StyledCard.Title>
            <StyledCard.Subtitle as="h6">{subTitle}</StyledCard.Subtitle>
            <StyledCard.Text>{children}</StyledCard.Text>
            </StyledCard.ImgOverlay>
        </StyledCard>
        )
    }
    else {
          return(
              <>
            <StyledCard imgUrl={imgUrl} color={color} bgColor={bgColor} {...props}>
                <StyledCard.Body>
                <StyledCard.Title as="h5">{cardTitle}</StyledCard.Title>
                <StyledCard.Subtitle as="h6">{subTitle}</StyledCard.Subtitle>
                <StyledCard.Text>{children}</StyledCard.Text>
                </StyledCard.Body>
                <img src={imgUrl} />
            </StyledCard>
            </>
        )
    }
}

export default Card;