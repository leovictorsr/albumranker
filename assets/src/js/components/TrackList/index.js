import React from "react";
import TrackItem from "../TrackItem";
import Sortable from "react-sortablejs";

const TrackList = ({tracks}) => {
    const trackList = tracks.map((item) => <TrackItem item={item} />);
    return (
        <Sortable class="list-group">
            {trackList}
        </Sortable>
    );
}

export default TrackList
