import React from "react";
import $ from "jquery";
import axios from "axios";
import arrayMove from "array-move";

import ResultList from "../../components/ResultList";
import SaveBar from "../../components/SaveBar";
import SearchBar from "../../components/SearchBar";
import Title from "../../components/Title";
import TrackList from "../../components/TrackList";

class App extends React.Component {
    constructor (props) {
        super(props);
        this.onSortEnd = this.onSortEnd.bind(this);
        this.saveRanking = this.saveRanking.bind(this);
        this.search = this.search.bind(this);
        this.searchAlbum = this.searchAlbum.bind(this);
        this.searchArtist = this.searchArtist.bind(this);
        this.selectAlbum = this.selectAlbum.bind(this);
        this.state = {
            albums: [],
            tracks: []
        }
    }

    saveRanking () {
        let handle = $(".form-control").val();
        let ranking = {
            tracks: this.state.tracks,
            album: this.state.albums[0].name,
            artist: this.state.albums[0].artist,
            handle: handle
        }
        if (handle) {
            axios.post(`/ranking/`, ranking)
                 .then(res => {console.log("Ranking posted succesfully.")})
                 .catch(err => console.log(err));
            return;
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
                     this.setState({
                         albums: res.data,
                         tracks: [],
                     });
                 })
                 .catch(err => console.log(err));
            return;
        }
    }

    selectAlbum (item) {
        this.setState({
            albums: [item],
            tracks: item.tracks,
        })
    }

    onSortEnd (ev) {
        this.setState({
            tracks: arrayMove(this.state.tracks, ev.oldIndex, ev.newIndex),
        });
    };

    render () {
        const text = "AlbumRanker";

        return (
            <div>
                <Title text={text} />
                <SearchBar searchAlbum={this.searchAlbum} searchArtist={this.searchArtist}/>
                <ResultList albums={this.state.albums} selectAlbum={this.selectAlbum}/>
                <TrackList tracks={this.state.tracks} onSortEnd={this.onSortEnd}/>
                <SaveBar saveRanking={this.saveRanking}/>
            </div>
        )
    }
}

export default App;
