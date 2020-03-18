import React from "react";
import "./App.css";
import Container from "./components/NasaContainer";

function App() {
    // https://api.nasa.gov/planetary/apod?api_key=bOSofFFDfPE8KYcweoQPKvuVEpFcAxtTn2JEHqPh
    return (
        <div className="App">
            <h1>This is NASA's photo of the day!</h1>
            <Container />
        </div>
    );
}

export default App;
