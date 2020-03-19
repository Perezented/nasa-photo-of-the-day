import React from "react";
import Container from "./components/NasaContainer";
import Header from "./components/Header";
import styled from "styled-components";
const AppSection = styled.section`
    background-color: black;
    color: white;
    margin: 0;
    padding: 0;
`;
function App() {
    // https://api.nasa.gov/planetary/apod?api_key=bOSofFFDfPE8KYcweoQPKvuVEpFcAxtTn2JEHqPh
    document.querySelector("body").style.backgroundColor = "black";
    return (
        <>
            <AppSection>
                <Header />

                <Container />
            </AppSection>
        </>
    );
}

export default App;
