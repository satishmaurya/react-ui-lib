import React from "react";
import StyledCard from "./Card.styled";
import Card from 'react-bootstrap/Card';

const StackCard = (props) =>{
    const{ color, bgColor, children, cardTitle, width, alignText, alignCard, imgUrl, subTitle, imgPos} =props;
    if(imgPos==="middle"){
    return(
        <StyledCard imgUrl={imgUrl} color={color} bgColor={bgColor} width={width} alignText={alignText} alignCard={alignCard} imgPos={imgPos}>
            <Card.Body>
            <Card.Title>{cardTitle}</Card.Title>
            <Card.Subtitle>{subTitle}</Card.Subtitle>
            </Card.Body>
            <img src={imgUrl} />
            <Card.Body>
            <Card.Text>{children}</Card.Text>
            </Card.Body>
        </StyledCard>
    )
    }
    else if (imgPos==="top") {
        return(
            <StyledCard imgUrl={imgUrl} color={color} bgColor={bgColor} width={width} alignText={alignText} alignCard={alignCard} imgPos={imgPos}>
                <img src={imgUrl} />
                <Card.Body>
                <Card.Title>{cardTitle}</Card.Title>
                <Card.Subtitle>{subTitle}</Card.Subtitle>
                <Card.Text>{children}</Card.Text>
                </Card.Body>
            </StyledCard>
        )
    }
    else if (imgPos==="bottom") {
        return(
            <StyledCard imgUrl={imgUrl} color={color} bgColor={bgColor} width={width} alignText={alignText} alignCard={alignCard} imgPos={imgPos}>
                <Card.Body>
                <Card.Title>{cardTitle}</Card.Title>
                <Card.Subtitle>{subTitle}</Card.Subtitle>
                <Card.Text>{children}</Card.Text>
                </Card.Body>
                <img src={imgUrl} />
            </StyledCard>
        )
    }
        else if (imgPos==="bg") {
        return(
            <StyledCard imgUrl={imgUrl} color={color} bgColor={bgColor} width={width} alignText={alignText} alignCard={alignCard} imgPos={imgPos}>
            <img src={imgUrl} />
            <Card.ImgOverlay>
            <Card.Title>{cardTitle}</Card.Title>
            <Card.Subtitle>{subTitle}</Card.Subtitle>
            <Card.Text>{children}</Card.Text>
            </Card.ImgOverlay>
        </StyledCard>
        )
    }
    else {
          return(
            <StyledCard imgUrl={imgUrl} color={color} bgColor={bgColor} width={width} alignText={alignText} alignCard={alignCard} imgPos={imgPos}>
                <Card.Body>
                <Card.Title>{cardTitle}</Card.Title>
                <Card.Subtitle>{subTitle}</Card.Subtitle>
                <Card.Text>{children}</Card.Text>
                </Card.Body>
                <img src={imgUrl} />
            </StyledCard>
        )
    }
}

export default StackCard;