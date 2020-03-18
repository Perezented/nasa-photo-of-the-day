import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";

export default function Container() {
    const [info, updatedInfo] = useState({});
    useEffect(() => {
        axios
            .get(
                "https://api.nasa.gov/planetary/apod?api_key=bOSofFFDfPE8KYcweoQPKvuVEpFcAxtTn2JEHqPh&date=2020-03-18"
            )
            .then(result => {
                console.log(result.data);
                updatedInfo(result.data);
            })
            .catch(error => console.log(error));
    }, []);
    return (
        <section>
            <NasaCard result={info} />
        </section>
    );
}
