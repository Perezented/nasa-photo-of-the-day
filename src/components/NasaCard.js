import React from "react";
import TitleArea from "./TitleArea";
import NasaPhoto from "./NasaPhoto";
const NasaCard = info => {
    return (
        <div>
            <TitleArea result={info.result} />
            <NasaPhoto result={info.result} />
        </div>
    );
};
export default NasaCard;
