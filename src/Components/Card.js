import React from "react";
import 'tachyons'


const Card = ({name , email , id}) => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow5 w-20 h-20">
            <img src={`https://robohash.org/${id}?50x75`} alt="robots" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;