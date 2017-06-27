import React, { Component } from 'react';
import calculatorApp from '../state'
import App from './App'

class StateWrapper extends Component {
    
    constructor(props) {
		super(props)

		this.state = {
			state: calculatorApp.getState()
		}

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
