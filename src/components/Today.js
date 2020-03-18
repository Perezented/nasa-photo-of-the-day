import React, { useState, useEffect } from "react";
import axios from "axios";
import TodayCard from "./TodayCard";

export default function Today() {
    const [info, updatedInfo] = useState("test");
    useEffect(() => {
        axios
            .get(
                "https://api.nasa.gov/planetary/apod?api_key=bOSofFFDfPE8KYcweoQPKvuVEpFcAxtTn2JEHqPh"
            )
            .then(result => {
                console.log(result.data);
                updatedInfo(result.data);
            })
            .catch(error => console.log(error));
    }, []);
    return (
        <section>
            <h2>title</h2>
            <h5>Date</h5>
            <p>the actual info will go here. </p>
            <TodayCard />
        </section>
    );
}
