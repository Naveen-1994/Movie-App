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
        // console.log(res)
    }

    return (
        <div className="row">
            <div className="col-md-6 border">
                <h3>Add Movie</h3>
                <form onSubmit={handlesubmit} className="mb-3 ms-2">
                    <input type="text" value={movie} onChange={handlemovie} placeholder='Enter Movie Name' className="form-control"></input> <br />
                    <input type="text" value={rating} onChange={handlerating} placeholder='Enter IMDB Rating' className="form-control"></input> <br />
                    <input type="submit" className="btn btn-info" />
                </form>
            </div>
        </div>
    )
}

export default MovieForm