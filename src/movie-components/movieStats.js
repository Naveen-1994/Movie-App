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
        <div className="row pt-2">
            <div className="col-md-6 border">
                <h3 className="text-info">Movie Stats</h3>
                <div className="ms-2">
                    <h4 className="text-dark-70">Total Movies: {movies.length}</h4>
                    <h4 className="text-black-50">Top Ranked Movie:</h4>
                    <p><b>#{topRank(movies).toUpperCase()}</b></p>
                </div>
            </div>
        </div>
    )
}

export default MovieStats