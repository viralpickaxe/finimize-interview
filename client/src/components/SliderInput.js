import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './SliderInput.css'

import calculatorApp from '../state'

export default class SliderInput extends Component {

	handleChange(e) {
		calculatorApp.dispatch({
			type: 'UPDATE_PARAM',
			id: this.props.id,
			value: Number(e.target.value)
		})
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

