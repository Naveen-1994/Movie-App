import React, { useState } from "react";
import { deletemovie } from "../config-action/configAction";
import { useDispatch, useSelector } from "react-redux";


const MovieCard = () => {
    const dispatch = useDispatch()
    const movies = useSelector((state) => {
        return state.movies
    })
    const [search, setSearch] = useState('')
    const [sorttype, setSorttype] = useState('')

    const handleclick = (id) => {
        dispatch(deletemovie(id))
    }

    const handlechange = (e) => {
        setSearch(e.target.value)
    }
    const handlechangedropdown = (e) => {
        setSorttype(e.target.value)
        switch (e.target.value) {
            case "ASC_CHAR": {
                movies.sort((a, b) => b.IMDB - a.IMDB)
                console.log(movies)
            }
            default: {
                return movies
            }
        }
    }
    return (
        <div className="row ms-3">
            <div className="col-md-6">
                <input type="text" value={search} onChange={handlechange} placeholder="Search for movie" className="form-control"></input>
            </div>
            <div className="col-md-6">
                <select value={sorttype} onChange={handlechangedropdown} className="form-select">
                    <option value="">Order By</option>
                    <option value="ASC_CHAR">A-Z</option>
                    <option value="DSC_CHAR">Z-A</option>
                    <option value="ASC_NUM">0-1</option>
                    <option value="DSC_NUM">1-0</option>
                </select>
            </div>
            <div className="col-md-12 mt-2">
                {
                    movies.map((movie) => {
                        if (movie.movieName.toLowerCase().includes(search.toLowerCase())) {
                            return (
                                <div key={movie.id} className="card mb-3">
                                    <div className="row g-0">
                                        <div className="col-md-4 bg-secondary">
                                        </div>
                                        <div className="col-md-8 bg-light ">
                                            <div className="card-body">
                                                <h5 className="card-title">Name: {movie.movieName}</h5>
                                                <p className="card-text">IMDB Rating: #{movie.IMDB}</p>
                                                <button className="btn float-end"><i className="bi bi-trash3" onClick={() => {
                                                    handleclick(movie.id)
                                                }}></i></button>
                                            </div>
                                        </div>
                                    </div>
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