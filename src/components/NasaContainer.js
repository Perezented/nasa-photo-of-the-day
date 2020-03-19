import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";
import PickDate from "./PickDate";

export default function Container() {
    const [info, updatedInfo] = useState({});

    const day = new Date();
    const today = `${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}`;
    const [setDate, updateDate] = useState(today);

    useEffect(() => {
        axios
            .get(
                `https://api.nasa.gov/planetary/apod?api_key=bOSofFFDfPE8KYcweoQPKvuVEpFcAxtTn2JEHqPh&date=${setDate}`
            )
            .then(result => {
                console.log(result.data);
                updatedInfo(result.data);
                // console.log(updateDate);
            })
            .catch(error => console.log(error));
    }, [setDate]);

    return (
        <section>
            <PickDate today={today} />
            <NasaCard result={info} updateDate={updateDate} today={today} />
        </section>
    );
}
