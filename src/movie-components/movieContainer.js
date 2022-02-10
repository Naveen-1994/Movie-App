import React from "react";
import MovieForm from "./movieForm";
import MovieList from "./movieList";
import MovieStats from "./movieStats";

const MovieContainer = () => {

    return (
        <div className="row">
            <h2 className="m-2">My Movie Lists</h2>
            <div className="col-md-6">
                <MovieList />
            </div>
            <div className="col-md-6">
                <MovieForm />
                <MovieStats />
            </div>
        </div>
    )
}

export default MovieContainer