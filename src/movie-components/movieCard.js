import React, { useState } from "react";
import { deletemovie } from "../config-action/configAction";
import { useDispatch } from "react-redux";

const MovieCard = (props) => {
    const dispatch = useDispatch()
    const { movies } = props
    const [search, setSearch] = useState('')

    const handleclick = (id) => {
        dispatch(deletemovie(id))
    }

    const handlechange = (e) => {
        setSearch(e.target.value)
    }
    return (
        <div>
            <input type="text" value={search} onChange={handlechange}></input>
            <div>
                {
                    movies.map((movie) => {
                        if (movie.movieName.toLowerCase().includes(search.toLowerCase())) {
                            return (
                                <div key={movie.id}>
                                    <h3>Name: {movie.movieName}</h3>
                                    <p>IMDB Rating: #{movie.IMDB}</p>
                                    <button onClick={() => {
                                        handleclick(movie.id)
                                    }}>Delete</button>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default MovieCard