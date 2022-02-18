const initialvalue = []

const MovieReducers = (state = initialvalue, action) => {

    switch (action.type) {
        case "ADD_MOVIE": {
            return [...state, { ...action.payload }]
        }
        case "DELETE_MOVIE": {
            return state.filter((movie) => {
                return movie.id != action.payload
            })
        }
        case "original": {
            return [...state]
        }
        default: {
            return state
        }
    }
}

export default MovieReducers