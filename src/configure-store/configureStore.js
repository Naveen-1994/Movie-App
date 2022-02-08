import { createStore, combineReducers } from 'redux'
import MovieReducers from '../configure-reducer/movieReducers'

const ConfigureStore = () => {
    const store = createStore(combineReducers({
        movies: MovieReducers
    }))
    return store
}

export default ConfigureStore