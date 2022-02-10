import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const MovieStats = () => {
    const movies = useSelector((state) => {
        return state.movies
    })

    const topRank = (movis) => {
        let rank = 0, id = 0
        if (movis.length > 0) {
            movis.map((movi, i) => {
                if (rank < movi.IMDB) {
                    rank = movi.IMDB
                    id = i
                }
            })
            return movis[id].movieName
        }
    }

    return (
        <div>
            <div>
                <h3>Movie Stats</h3>
                <div className="ms-2">
                    <h4>Total Movies: {movies.length}</h4>
                    <h4>Top Ranked Movie: {topRank(movies)}</h4>
                </div>
            </div>
        </div>
    )
}

export default MovieStats