import React from "react";
import { useSelector } from "react-redux";

const MovieStats = () => {
    const movies = useSelector((state) => {
        return state.movies
    })
    return (
        <div>
            <h2>Movie Stats</h2>
            <h3>Total Movies - {movies.length}</h3>
        </div>
    )
}

export default MovieStats