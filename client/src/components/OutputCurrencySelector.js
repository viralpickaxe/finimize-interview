import React, { Component } from 'react'

import calculatorApp from '../state'
import { update_value } from '../state/actions'

export default class OutputCurrencySelector extends Component {

	handleChange(e) {

		calculatorApp.dispatch(
            update_value("currency", e.target.value)
        )

	}

	render() {
        var curriencies = []

        for ( var currency in calculatorApp.getState().calculator.currencies_data ) {
            
            curriencies.push(
                <option key={currency} value={currency}>{currency}</option>
            )

        }

		return (
			<select className="output-currency-selector" onChange={this.handleChange.bind(this)} value={calculatorApp.getState().calculator.currency}>
				{curriencies}
			</select>
		)
	}
}