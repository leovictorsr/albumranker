import React from "react";

import Title from "../../components/Title";

class App extends React.Component {
    render () {
        const text = "AlbumRanker";
        return (
            <div className="container-fluid d-flex">
                <Title text={text} />
            </div>
        )
    }
}

export default App;
