import React, { Component } from 'react';
import axios from 'axios'
import CurrencyInput from './CurrencyInput'
import SliderInput from './SliderInput'
import DisplayGraph from './DisplayGraph'
import './App.css';

import calculatorApp from '../state'

class App extends Component {
    
    constructor(props) {
		super(props)

		this.state = {
			calculator_data: null
		}
	}

    componentDidMount() {

        this.fetchCalculations()

        calculatorApp.subscribe(() => {
            this.fetchCalculations()
        })
        
    }

    fetchCalculations() {

        let calculator_state = calculatorApp.getState().calculator

        axios.post("http://localhost:3001/api/calculate",{
            amount_saved: calculator_state.amount_saved,
            additional_monthly: calculator_state.additional_monthly,
            interest_percent: 1 + (calculator_state.interest_percent / 100),
            interest_payout: calculator_state.interest_payout,
            total_months: calculator_state.total_months
        })
        .then((response) => {
            
            this.setState({calculator_data: response.data})

        })

    }

    render() {

        return (
            <div className="App">
                <div className="header-banner">
                    <h1 className="fmz-white-font">Finimize Interest Rate Calculator</h1>
                </div>
                <div className="financial-inputs">
                    <p className="input-label">How much have you saved?</p>
                    <CurrencyInput id="amount_saved" />

                    <p className="input-label">How much will you save each month?</p>
                    <CurrencyInput id="additional_monthly" />

                    <p className="input-label">How much interest will you earn per month?</p>
                    <SliderInput id="interest_percent" />
                </div>
                <div className="financial-display">
                    {this.state.calculator_data ? <DisplayGraph data={this.state.calculator_data}/> : null}
                </div>
            </div>
        );

    }

}

export default App;
