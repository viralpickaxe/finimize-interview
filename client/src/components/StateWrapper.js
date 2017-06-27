import React, { Component } from 'react';
import calculatorApp from '../state'
import App from './App'

// Componented used for connecting redux and react
class StateWrapper extends Component {
    
    constructor(props) {
		super(props)

		this.state = {
			state: calculatorApp.getState()
		}

		// Subscribe to store updates
        calculatorApp.subscribe(() => {
			this.setState({
				state: calculatorApp.getState()
			})
		})
	}

    render() {

        return (
            <App />
        );

    }

}
export default StateWrapper;
