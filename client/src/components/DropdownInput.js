import React, { Component } from 'react'
import PropTypes from 'prop-types'

import calculatorApp from '../state'
import { update_value } from '../state/actions'

export default class DropdownInput extends Component {

	handleChange(e) {
		calculatorApp.dispatch(
			update_value(this.props.id, e.target.value)
		)
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
