import React from "react";

const SearchBar = ({searchAlbum, searchArtist}) => {
    return(
        <div class="input-group w-100">
            <input type="text"
                   class="form-control"
                   placeholder="Album or artist"
                   aria-label="Album"
                   aria-describedby="search-button" />
            <div class="input-group-append">
                <button type="button"
                        class="btn btn-dark"
                        onClick={searchAlbum}>
                    Search album
                </button>
                <button type="button"
                        class="btn btn-dark"
                        onClick={searchArtist}>
                    Search artist
                </button>
            </div>
        </div>
    )
}

export default SearchBar
