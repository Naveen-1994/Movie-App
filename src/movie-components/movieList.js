import React, { useState } from "react";
import { useSelector } from "react-redux";
import MovieCard from "./movieCard";

const MovieList = () => {
    const movies = useSelector((state) => {
        return state.movies
    })
    console.log(movies)
    return (
        <div>
            <h2>Movie list</h2>
            <MovieCard movies={movies} />
        </div>
    )
}

export default MovieList