import React from "react";

import SearchBar from "../../components/SearchBar";
import Title from "../../components/Title";

class App extends React.Component {
    render () {
        const text = "AlbumRanker";
        return (
            <div>
                <Title text={text} />
                <SearchBar />
            </div>
        )
    }
}

export default App;
