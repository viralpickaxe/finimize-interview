import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './CurrencyInput.css'

import calculatorApp from '../state'

export default class CurrencyInput extends Component {

	handleChange(e) {
		calculatorApp.dispatch({
			type: 'UPDATE_PARAM',
			id: this.props.id,
			value: Number(e.target.value)
		})
	}

	render() {
		return (
			<div className="currency-input">
				<span>£</span>
				<input type="number"
					value={calculatorApp.getState().calculator[this.props.id]}
					onChange={this.handleChange.bind(this)}
				/>
			</div>
		)
	}
}

CurrencyInput.propTypes = {
	id: PropTypes.string
}
