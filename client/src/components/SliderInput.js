import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './SliderInput.css'

import calculatorApp from '../state'
import { update_value } from '../state/actions'

export default class SliderInput extends Component {

	handleChange(e) {
		calculatorApp.dispatch(
			update_value(this.props.id, Number(e.target.value))
		)
	}

	render() {
		let value = calculatorApp.getState().calculator[this.props.id]

		return (
			<div className="fmz-slider">
				<p>{value}%</p>
				<input type="range"
					value={value}
					min={0}
					max={10}
					step={0.25}
					onChange={this.handleChange.bind(this)}/>
			</div>
		)
	}
}

SliderInput.propTypes = {
	id: PropTypes.string
}

