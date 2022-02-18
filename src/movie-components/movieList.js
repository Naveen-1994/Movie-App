import React, { useState } from "react";
import { useSelector } from "react-redux";
import MovieCard from "./movieCard";

const MovieList = () => {
    const movies = useSelector((state) => {
        return state.movies
    })
    console.log(movies)
    return (
        <div className="col-md-12">
            <h3 className="ms-3">Movie list</h3>
            <MovieCard />
        </div>
    )
}

export default MovieList