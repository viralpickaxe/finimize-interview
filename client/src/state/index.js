import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import calculator from './calculator'

const calculatorApp = createStore(
    combineReducers({calculator}),
    applyMiddleware(thunk)
)

export default calculatorApp