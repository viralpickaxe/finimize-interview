import { combineReducers, createStore } from 'redux'
import calculator from './calculator'
import graph from './graph'

const calculatorApp = createStore(
    combineReducers({
        calculator,
        graph
    }),
    window["__REDUX_DEVTOOLS_EXTENSION__"] && window["__REDUX_DEVTOOLS_EXTENSION__"]()
)

export default calculatorApp