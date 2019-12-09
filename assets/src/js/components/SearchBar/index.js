import React from "react";
import $ from "jquery";

class SearchBar extends React.Component {
    constructor (props) {
        super(props);
        this.search = this.search.bind(this);
    }

    search (event) {
        console.log($(".form-control"));
    }

    render () {
        return(
            <div class="input-group mb-3">
                <input type="text"
                       class="form-control"
                       placeholder="Album or artist"
                       aria-label="Album or artist"
                       aria-describedby="search-button" />
                <div class="input-group-append">
                    <button type="button"
                            class="btn btn-dark"
                            id="search-button"
                            onClick={this.search}>
                        Search
                    </button>
                </div>
            </div>
        )
    }
}

export default SearchBar
