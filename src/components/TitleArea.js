import React from "react";

import styled from "styled-components";

const TitleDiv = styled.div`
    margin: 0 auto;
    width: 90%;
`;
export default function TitleArea(result) {
    return (
        <TitleDiv>
            <h2>{result.result.title}</h2>
            <p>NASA had this picture up on: {result.result.date}</p>
        </TitleDiv>
    );
}
