import React from "react";
import "./App.css";

function App() {
    // https://api.nasa.gov/planetary/apod?api_key=bOSofFFDfPE8KYcweoQPKvuVEpFcAxtTn2JEHqPh
    return (
        <div className="App">
            <h1>This is NASA's photo of the day!</h1>
            <p>This information is retrieved from the nasa.gov api.</p>
        </div>
    );
}

export default App;
