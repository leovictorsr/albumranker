import React from "react";
import $ from "jquery";
import axios from "axios";

import ResultList from "../../components/ResultList"
import SearchBar from "../../components/SearchBar";
import Title from "../../components/Title";

class App extends React.Component {
    constructor (props) {
        super(props);
        this.search = this.search.bind(this);
        this.searchAlbum = this.searchAlbum.bind(this);
        this.searchArtist = this.searchArtist.bind(this);
        this.state = {
            albums: []
        }
    }

    searchAlbum () {
        this.search("album");
    }

    searchArtist () {
        this.search("artist");
    }

    search (type) {
        let q = $(".form-control").val();
        if (q) {
            axios.get(`/search/${q}/${type}`)
                 .then(res => {
                     this.setState({ albums: res.data });
                 })
                 .catch(err => console.log(err));
            return;
        }
    }

    render () {
        const text = "AlbumRanker";

        return (
            <div>
                <Title text={text} />
                <SearchBar searchAlbum={this.searchAlbum} searchArtist={this.searchArtist}/>
                <ResultList albums={this.state.albums}/>
            </div>
        )
    }
}

export default App;
