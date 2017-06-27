import axios from 'axios'

export const UPDATE_VALUE = "UPDATE_VALUE"
export const update_value = (key, value) => {

    return (dispatch) => {

        dispatch({
            type: UPDATE_VALUE,
            key,
            value
        })

        dispatch(fetch_calculations())

    }
    
}

export const FETCH_CALCULATIONS = "FETCH_CALCULATIONS"
export const fetch_calculations = () => {

    return (dispatch, getState) => {

        dispatch({
            type: FETCH_CALCULATIONS
        })

        axios.post("http://localhost:3001/api/calculate",{
            amount_saved: getState().calculator.amount_saved,
            additional_monthly: getState().calculator.additional_monthly,
            interest_percent: getState().calculator.interest_percent,
            interest_payout: getState().calculator.interest_payout,
            total_months: getState().calculator.total_months
        })
        .then((response) => {
            
            dispatch(update_calculations_data(response.data))

        })

    }

}

export const UPDATE_CALCULATIONS_DATA = "UPDATE_CALCULATIONS_DATA"
export const update_calculations_data = (data) => ({
    type: UPDATE_CALCULATIONS_DATA,
    data
})

export const FETCH_CURRENCIES = "FETCH_CURRENCIES"
export const fetch_currencies = () => {

    return (dispatch, getState) => {

        dispatch({
            type: FETCH_CURRENCIES
        })

        axios.get("http://api.fixer.io/latest?base=GBP")
        .then((response) => {

            dispatch(update_currencies_data({
                "GBP": 1,
                ...response.data.rates
            }))

        })

    }

}

export const UPDATE_CURRENCIES_DATA = "UPDATE_CURRENCIES_DATA"
export const update_currencies_data = (data) => ({
    type: UPDATE_CURRENCIES_DATA,
    data
})