import React from "react";
import styled from "styled-components";

const ImageDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    margin: 3% auto;
    border: 1px solid green;
`;
const ImageHalf = styled.img`
    max-width: 100%;
    height: 75vh;
`;
const TextOnImage = styled.h5`
    text-align: center;
`;
const Explained = styled.p`
    line-height: 120%;
    font-size: 1.2rem;
`;
const ExplainedDiv = styled.div`
    width: 40%;
`;
export default function NasaPhoto(result) {
    // console.log(result);
    return (
        <ImageDiv>
            <div>
                <ImageHalf
                    src={result.result.url}
                    alt="Nasa's selected a view for this day."
                />
                <TextOnImage>{result.result.copyright}©</TextOnImage>
            </div>
            <ExplainedDiv>
                <h3>What's going on in today's photo:</h3>
                <Explained>{result.result.explanation}</Explained>
            </ExplainedDiv>
        </ImageDiv>
    );
}
