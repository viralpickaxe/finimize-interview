import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'

import calculatorApp from '../state'

export default class DisplayGraph extends Component {

	render() {
		var { data } = this.props

		// Get the active exchange rate
		let state = calculatorApp.getState().calculator
		let currency_exchange_rate = state.currencies_data[state.currency]

		// Adjust all the results using a selected currency exchange
		data = data.map((month) => {
			return {
				month: month.month,
				value: month.value * currency_exchange_rate
			}
		})

		return (
			<div>
				<ResponsiveContainer width={"100%"} height={300}>
					<LineChart data={data}>
						<XAxis dataKey="month" />
						<YAxis dataKey="value" />
						<Line type="monotone" dataKey="value" stroke="#00b2ff" strokeWidth={4} yAxisId={0} />
						<Tooltip />
					</LineChart>
				</ResponsiveContainer>
			</div>
		)
	}
}

DisplayGraph.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object)
}
