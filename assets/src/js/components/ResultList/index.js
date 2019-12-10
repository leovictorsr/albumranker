import React from "react";
import ResultCard from "../ResultCard"

const ResultList = ({albums}) => {
    const albumsList = albums.map((item) => <ResultCard item={item} />);
    return (
        <div class="card-group">
            {albumsList}
        </div>
    );
}

export default ResultList
