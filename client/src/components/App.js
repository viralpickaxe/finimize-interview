import React, { Component } from 'react';
import axios from 'axios'
import CurrencyInput from './CurrencyInput'
import NumberInput from './NumberInput'
import SliderInput from './SliderInput'
import DropdownInput from './DropdownInput'
import DisplayGraph from './DisplayGraph'
import OutputCurrencySelector from './OutputCurrencySelector'
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

        // Fetch the calculations from the server for initial values
        this.fetchCalculations()

        // When the calculator values are updated in state
        calculatorApp.subscribe(() => {
            // Refetch the calculations
            this.fetchCalculations()
        })
        
    }

    fetchCalculations() {

        // Get the state from redux
        let calculator_state = calculatorApp.getState().calculator

        // Make a post request to the API
        axios.post("http://localhost:3001/api/calculate",{
            amount_saved: calculator_state.amount_saved,
            additional_monthly: calculator_state.additional_monthly,
            interest_percent: calculator_state.interest_percent,
            interest_payout: calculator_state.interest_payout,
            total_months: calculator_state.total_months
        })
        .then((response) => {
            
            // Update the local state with graph data
            this.setState({calculator_data: response.data})

        })

    }

    render() {

        // Pull in the state from redux for ease of use
        let calculator_state = calculatorApp.getState().calculator,
            graph_state = calculatorApp.getState().graph
        
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

                    <p className="input-label">Estimate Value over how many months?</p>
                    <NumberInput id="total_months" />

                    <p className="input-label">How much interest will you earn per <DropdownInput id="interest_payout" options={[{text: "Month", value: 1}, {text: "Quarter", value: 4}, {text: "Year", value: 12}]} />?</p>
                    <SliderInput id="interest_percent" />
                </div>
                <div className="financial-display">
                    {this.state.calculator_data ? <DisplayGraph data={this.state.calculator_data}/> : null}
                </div>
                <div className="financial-summary">
                    {this.state.calculator_data ? <p>
                        In <strong>{calculator_state.total_months} months</strong>, your initial investment of <strong>£{calculator_state.amount_saved}</strong>
                        {calculator_state.additional_monthly ? <span> (And your additional monthly savings of <strong>£{calculator_state.additional_monthly}</strong>) </span> : " "}
                        will be worth <strong>{(this.state.calculator_data[this.state.calculator_data.length-1].value * graph_state.exchange).toFixed(2)}</strong> <OutputCurrencySelector />
                    </p> : null}
                </div>

            </div>
        );

    }

}

export default App;
