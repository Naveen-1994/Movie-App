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