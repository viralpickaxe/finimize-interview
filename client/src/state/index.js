import { combineReducers, createStore } from 'redux'
import calculator from './calculator'

const calculatorApp = createStore(
    combineReducers({calculator}),
    window["__REDUX_DEVTOOLS_EXTENSION__"] && window["__REDUX_DEVTOOLS_EXTENSION__"]()
)

export default calculatorApp