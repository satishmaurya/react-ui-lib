import React from "react";
import StyledCard from "./Accordian.styled";
import Card from 'react-bootstrap/Card';

const Accordian = (props) =>{
    const{ color, bgColor, children, cardTitle, width, alignText, alignCard, imgUrl, subTitle, imgPos, border} =props;
    if(imgPos==="middle"){
    return(
        <StyledCard imgUrl={imgUrl} color={color} bgColor={bgColor} {...props}>
            <Card.Body>
            <Card.Title as="h5">{cardTitle}</Card.Title>
            <Card.Subtitle as="h6" className="text-muted">{subTitle}</Card.Subtitle>
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
            <StyledCard imgUrl={imgUrl} color={color} bgColor={bgColor} {...props}>
                <img src={imgUrl} />
                <Card.Body>
                <Card.Title as="h5">{cardTitle}</Card.Title>
                <Card.Subtitle as="h6">{subTitle}</Card.Subtitle>
                <Card.Text>{children}</Card.Text>
                </Card.Body>
            </StyledCard>
        )
    }
    else if (imgPos==="bottom") {
        return(
            <StyledCard imgUrl={imgUrl} color={color} bgColor={bgColor} {...props}>
                <Card.Body>
                <Card.Title as="h5">{cardTitle}</Card.Title>
                <Card.Subtitle as="h6">{subTitle}</Card.Subtitle>
                <Card.Text>{children}</Card.Text>
                </Card.Body>
                <img src={imgUrl} />
            </StyledCard>
        )
    }
        else if (imgPos==="bg") {
        return(
            <StyledCard imgUrl={imgUrl} color={color} bgColor={bgColor} {...props}>
            <img src={imgUrl} />
            <Card.ImgOverlay>
            <Card.Title as="h5">{cardTitle}</Card.Title>
            <Card.Subtitle as="h6">{subTitle}</Card.Subtitle>
            <Card.Text>{children}</Card.Text>
            </Card.ImgOverlay>
        </StyledCard>
        )
    }
    else {
        console.log(bgColor,'---bg');
          return(
              <>
            <StyledCard imgUrl={imgUrl} color={color} bgColor={bgColor} {...props}>
                <Card.Body>
                <Card.Title as="h5">{cardTitle}</Card.Title>
                <Card.Subtitle as="h6">{subTitle}</Card.Subtitle>
                <Card.Text>{children}</Card.Text>
                </Card.Body>
                <img src={imgUrl} />
            </StyledCard>
            </>
        )
    }
}

export default Accordian;