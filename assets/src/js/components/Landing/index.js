import React from "react";

const Landing = ({toCreate}) => {
    return(
        <div class="landing container-fluid">
            <button type="button"
                    class="btn btn-outline-danger font-weight-bold text-uppercase"
                    onClick={toCreate}>
                Create
            </button>
            <button type="button"
                    class="btn btn-outline-danger font-weight-bold text-uppercase">
                List
            </button>
        </div>
    )
}

export default Landing
