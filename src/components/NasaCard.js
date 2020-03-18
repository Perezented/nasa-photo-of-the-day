import React from "react";

const NasaCard = props => {
    console.log(props);
    return (
        <div>
            <div className="headerArea">
                <h2>{props.result.title}</h2>
                <p>NASA had this picture up on: {props.result.date}</p>
            </div>
            <p className="explained">{props.result.explanation}</p>
            <div className="photo">
                <img
                    src={props.result.url}
                    alt="Nasa's selected a view for this day."
                />
                <h5>{props.result.copyright}©</h5>
            </div>
        </div>
    );
};
export default NasaCard;
