import React from "react";

const Landing = ({toCreate}) => {
    return(
        <div class="landing container-fluid">
            <button type="button"
                    class="btn bg-danger font-weight-bold text-uppercase"
                    onClick={toCreate}>
                Create ranking
            </button>
            <button type="button"
                    class="btn bg-danger font-weight-bold text-uppercase">
                List ranking
            </button>
        </div>
    )
}

export default Landing
