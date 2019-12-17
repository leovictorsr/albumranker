import React from "react";

const SearchBar = ({searchBy, text}) => {
    return(
        <div class="input-group w-100">
            <input type="text"
                   class="form-control"
                   aria-describedby="search-button" />
            <div class="input-group-append">
                <button type="button"
                        class="btn bg-danger font-weight-bold text-uppercase"
                        onClick={searchBy}>
                    Search {text}
                </button>
            </div>
        </div>
    )
}

export default SearchBar
