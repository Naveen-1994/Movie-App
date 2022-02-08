import React, { useState } from "react";
import { addmovie } from "../config-action/configAction";
import { useDispatch } from "react-redux";

const MovieForm = () => {
    const dispatch = useDispatch()
    const [movie, setMovie] = useState('')
    const [rating, setRating] = useState('')

    const handlemovie = (e) => {
        setMovie(e.target.value)
    }

    const handlerating = (e) => {
        setRating(e.target.value)
    }
    const handlesubmit = (e) => {
        e.preventDefault()
        const res = {
            id: Number(new Date()),
            movieName: movie,
            IMDB: Number(rating)
        }
        setMovie('')
        setRating('')
        dispatch(addmovie(res))
    }

    return (
        <div>
            <h2>Add Movie</h2>
            <form onSubmit={handlesubmit}>
                <input type="text" value={movie} onChange={handlemovie} placeholder='Enter Movie Name'></input> <br />
                <input type="text" value={rating} onChange={handlerating} placeholder='Enter IMDB Rating'></input> <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default MovieForm