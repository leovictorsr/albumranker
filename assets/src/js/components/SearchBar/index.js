import React from "react";
import $ from "jquery";
import axios from "axios";

class SearchBar extends React.Component {
    constructor (props) {
        super(props);
        this.search = this.search.bind(this);
    }

    search (event) {
        let q = $(".form-control").val();
        if (q) {
            axios.get(`/search/${q}`)
                 .then(res => console.log(res))
                 .catch(err => console.log(err));
            return;
        }
    }

    render () {
        return(
            <div class="input-group mb-3">
                <input type="text"
                       class="form-control"
                       placeholder="Album"
                       aria-label="Album"
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
