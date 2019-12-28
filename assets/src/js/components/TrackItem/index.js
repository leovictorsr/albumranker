import React from "react";
import {SortableElement} from "react-sortable-hoc";

const TrackItem = SortableElement(({item, sortIndex}) => {
    return (
        <li class="list-group-item text-center ">
            <span class="badge badge-danger float-left">{sortIndex + 1}</span>
            <span class="badge badge-light float-center">{item.name}</span>
            <span class="badge badge-warning float-right">{item.duration_formatted}</span>
        </li>
    );
});

export default TrackItem
