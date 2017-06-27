import { UPDATE_VALUE, FETCH_CALCULATIONS, UPDATE_CALCULATIONS_DATA, FETCH_CURRENCIES, UPDATE_CURRENCIES_DATA } from "./actions"

const initial_state = {
    
    amount_saved: 1000,
    additional_monthly: 100,
    interest_percent: 5,
    interest_payout: 1,
    total_months: 12 * 5,
    currency: "GBP",

    calculations_data: null,
    calculations_loading: false,

    currencies_data: null,
    currencies_loading: false
}

let calculator = (state, action) => {

    if ( !state ) {
        return initial_state
    }

    switch (action.type) {
        case UPDATE_VALUE:

            state[action.key] = action.value
            return state
        
        case FETCH_CALCULATIONS:

            state.calculations_loading = true
            return state

        case UPDATE_CALCULATIONS_DATA:

            state.calculations_loading = false
            state.calculations_data = action.data
            return state

        case FETCH_CURRENCIES:

            state.currencies_loading = true
            return state

        case UPDATE_CURRENCIES_DATA:
        
            state.currencies_loading = false
            state.currencies_data = action.data
            return state

        default:

            return state

    }

}

export default calculator