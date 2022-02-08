import React from "react";
import MovieForm from "./movieForm";
import MovieList from "./movieList";
import MovieStats from "./movieStats";

const MovieContainer = () => {

    return (
        <div>
            <h2>My Movie Lists</h2>
            <MovieForm />
            <MovieList />
            <MovieStats />
        </div>
    )
}

export default MovieContainer