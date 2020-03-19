import React from "react";
import styled from "styled-components";

const NasaHead1 = styled.h1`
    font-size: 3rem;
    margin: 5%;
`;
export default function Header() {
    return (
        <header>
            <NasaHead1>NASA's photo of the day!</NasaHead1>
        </header>
    );
}
