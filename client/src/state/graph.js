const initial_state = {
    currency: "GBP",
    exchange: 1
}

let graph = (state, action) => {

    if ( !state ) {
        return initial_state
    }

    switch (action.type) {
        case 'UPDATE_OUTPUT_CURRENCY':

            state.currency = action.currency
            state.exchange = action.exchange
            return state

        default:

            return state

    }

}

export default graph