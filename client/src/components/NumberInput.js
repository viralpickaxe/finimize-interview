import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './NumberInput.css'

import calculatorApp from '../state'
import { update_value } from '../state/actions'

export default class NumberInput extends Component {

	handleChange(e) {
		calculatorApp.dispatch(
			update_value(this.props.id, Number(e.target.value))
		)
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
