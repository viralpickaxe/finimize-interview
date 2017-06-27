import React, { Component } from 'react'
import axios from 'axios'

import calculatorApp from '../state'

export default class OutputCurrencySelector extends Component {

    constructor(props) {
        super(props)

        this.state = {
            curriencies: {
                "GBP": 1
            }
        }
    }

    componentDidMount() {
        this.fetchCurrencies()
    }

    fetchCurrencies() {

        axios.get("http://api.fixer.io/latest?base=GBP")
            .then((response) => {
                
                this.setState({
                    curriencies: {
                        "GBP": 1,
                        ...response.data.rates
                    }
                })

            })

    }

	handleChange(e) {

        let selected = e.target.value

		calculatorApp.dispatch({
			type: 'UPDATE_OUTPUT_CURRENCY',
			currency: selected,
            exchange: this.state.curriencies[selected]
		})

	}

	render() {
        var curriencies = []

        for ( var currency in this.state.curriencies ) {
            
            curriencies.push(
                <option key={currency} value={currency}>{currency}</option>
            )

        }

		return (
			<select className="output-currency-selector" onChange={this.handleChange.bind(this)} value={calculatorApp.getState().graph.currency}>
				{curriencies}
			</select>
		)
	}
}