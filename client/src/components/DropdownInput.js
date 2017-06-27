import React, { Component } from 'react'
import PropTypes from 'prop-types'

import calculatorApp from '../state'

export default class DropdownInput extends Component {

	handleChange(e) {
		calculatorApp.dispatch({
			type: 'UPDATE_PARAM',
			id: this.props.id,
			value: Number(e.target.value)
		})
	}

	render() {
		return (
			<select value={calculatorApp.getState().calculator[this.props.id]} onChange={this.handleChange.bind(this)}>
                {this.props.options.map((option) => <option key={option.value} value={option.value}>{option.text}</option>)}
			</select>
		)
	}
}

DropdownInput.propTypes = {
	id: PropTypes.string,
    options: PropTypes.array
}
