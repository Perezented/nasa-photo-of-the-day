import React from "react";

const NasaCard = props => {
    console.log(props);
    return (
        <div>
            <h2>{props.result.title}</h2>
            <p>NASA had this picture up on: {props.result.date}</p>
            <img
                src={props.result.url}
                alt="Nasa's selected a view for this day."
            />
            <p>{props.result.explanation}</p>
            <h5>{props.result.copyright}</h5>
        </div>
    );
};
export default NasaCard;
