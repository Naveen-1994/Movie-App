export const addmovie = (movie) => {
    return {
        type: 'ADD_MOVIE',
        payload: movie
    }
}

export const deletemovie = (id) => {
    return {
        type: "DELETE_MOVIE",
        payload: id
    }
}

export const tempadd = (movies) => {
    return {
        type: "original",
        payload: movies
    }
}