import React from "react";

const ResultCard = ({item, selectAlbum}) => {

    return (
        <div class="card">
            <img class="card-img-top" src={item.image.url} alt={item.name} />
            <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                <p class="card-text">{item.artist}</p>
                <p class="card-text "><small>{item.total_tracks} songs</small></p>
                <a href="#" onClick={(e) => selectAlbum(item, e)} class="stretched-link" />
            </div>
        </div>
    )
}

export default ResultCard
