import React from "react";
import "./App.css";
import Today from "./components/Today";

function App() {
    // https://api.nasa.gov/planetary/apod?api_key=bOSofFFDfPE8KYcweoQPKvuVEpFcAxtTn2JEHqPh
    return (
        <div className="App">
            <h1>This is NASA's photo of the day!</h1>
            <Today />
        </div>
    );
}

export default App;
