import React from "react";

const SearchBar = ({saveRanking}) => {
    return(
        <div class="input-group w-100">
            <div class="input-group-prepend">
                <span class="input-group-text">@</span>
            </div>
            <input type="text"
                   class="handle-input"
                   placeholder="handle you want to save your ranking"
                   aria-label="handle"
                   aria-describedby="save-button" />
            <div class="input-group-append">
                <button type="button"
                        class="btn btn-dark"
                        onClick={saveRanking}>
                    Save ranking
                </button>
            </div>
        </div>
    )
}

export default SearchBar
