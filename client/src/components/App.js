import React, { Component } from 'react';
import './App.css';

import CurrencyInput from './CurrencyInput'
import NumberInput from './NumberInput'
import SliderInput from './SliderInput'
import DropdownInput from './DropdownInput'
import DisplayGraph from './DisplayGraph'
import OutputCurrencySelector from './OutputCurrencySelector'

import calculatorApp from '../state'
import { fetch_calculations, fetch_currencies } from '../state/actions'

class App extends Component {
    
    componentDidMount() {

        calculatorApp.dispatch(fetch_calculations())
        calculatorApp.dispatch(fetch_currencies())
        
    }

    render() {

        // Pull in the state from redux for ease of use
        let state = calculatorApp.getState().calculator
        
        let ready_to_display = state.calculations_data && state.currencies_data,
            final_value
        
        if ( ready_to_display ) {

            let last_value = state.calculations_data[state.calculations_data.length - 1].value
            let currency_exchange_rate = state.currencies_data[state.currency]

            final_value = last_value * currency_exchange_rate

        }

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
                    {ready_to_display ? <DisplayGraph data={state.calculations_data}/> : null}
                </div>
                <div className="financial-summary">
                    {ready_to_display ? <p>
                        In <strong>{state.total_months} months</strong>, your initial investment of <strong>£{state.amount_saved}</strong>
                        {state.additional_monthly ? <span> (And your additional monthly savings of <strong>£{state.additional_monthly}</strong>) </span> : " "}
                        will be worth <strong>{final_value.toFixed(2)}</strong> <OutputCurrencySelector />
                    </p> : null}
                </div>

            </div>
        );

    }

}

export default App;
