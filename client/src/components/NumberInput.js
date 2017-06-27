import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './NumberInput.css'

import calculatorApp from '../state'

export default class NumberInput extends Component {

	handleChange(e) {
		calculatorApp.dispatch({
			type: 'UPDATE_PARAM',
			id: this.props.id,
			value: Number(e.target.value)
		})
	}

	render() {
		return (
			<div className="number-input">
				<input type="number"
					value={calculatorApp.getState().calculator[this.props.id]}
					onChange={this.handleChange.bind(this)}
				/>
			</div>
		)
	}
}

NumberInput.propTypes = {
	id: PropTypes.string
}
