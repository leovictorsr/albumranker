import React from "react";
import $ from "jquery";
import axios from "axios";
import arrayMove from "array-move";

import Create from "../../components/Create";
import Landing from  "../../components/Landing";
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
        this.toCreate = this.toCreate.bind(this);
        this.toByAlbum = this.toByAlbum.bind(this);
        this.toByArtist = this.toByArtist.bind(this);

        this.state = {
            albums: [],
            tracks: [],
            flow: "landing"
        }
    }

    saveRanking () {
        let handle = $(".handle-input").val();
        let tracks = this.state.tracks.map((item, index) => {
            return ({
                name: item.name,
                duration: item.duration_formatted,
                track_number: item.track_number,
                order: index+1
            });
        });
        let ranking = {
            tracks: tracks,
            album: this.state.albums[0].name,
            artist: this.state.albums[0].artist,
            handle: handle
        };
        console.log(ranking);
        if (handle) {
            axios.post("/ranking", ranking)
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
        });
    }

    onSortEnd (ev) {
        this.setState({
            tracks: arrayMove(this.state.tracks, ev.oldIndex, ev.newIndex),
        });
    };

    toCreate () {
        this.setState({
            flow: "create",
        });
    }

    toByAlbum () {
        this.setState({
            flow: "by-album",
        });
    }

    toByArtist () {
        this.setState({
            flow: "by-artist",
        });
    }

    render () {
        return (
            <div class="wrapper">
                <Title/>
                {this.state.flow == "landing" && <Landing toCreate={this.toCreate}/>}
                {this.state.flow == "create"
                 && <Create byAlbum={this.toByAlbum} byArtist={this.toByArtist}/>}
                {this.state.flow == "by-album" && <SearchBar searchBy={this.searchAlbum} text="album" />}
                {this.state.flow == "by-artist" && <SearchBar searchBy={this.searchArtist} text="artist" />}
                {false && <ResultList albums={this.state.albums} selectAlbum={this.selectAlbum}/>}
                {false && <TrackList tracks={this.state.tracks} onSortEnd={this.onSortEnd}/>}
                {false && <SaveBar saveRanking={this.saveRanking}/>}
            </div>
        )
    }
}

export default App;
