import React from "react";
import TrendingLabel from "./trendingLabel";
import TrendingMoviesCard from "./trendingMoviesCard";

function Trending() {
    return (
        <div className="bg-[#181818]">
            <TrendingLabel />
            <TrendingMoviesCard />
        </div>
    );
}

export default Trending;