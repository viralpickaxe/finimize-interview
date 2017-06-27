const initial_state = {
    amount_saved: 1000,
    additional_monthly: 100,
    interest_percent: 5,
    interest_payout: 1,
    total_months: 12 * 5
}

let calculator = (state, action) => {

    if ( !state ) {
        return initial_state
    }

    switch (action.type) {
        case 'UPDATE_PARAM':

            state[action.id] = action.value
            return state

        default:

            return state

    }

}

export default calculator