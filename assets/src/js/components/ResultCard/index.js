import React from "react";

const ResultCard = ({item}) => {
    return (

        <div class="card">
            <img class="card-img-top" src={item.image.url} alt={item.name} />
            <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                <p class="card-text">{item.artist}</p>
            </div>
        </div>
    )
}

export default ResultCard
