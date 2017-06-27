module.exports = function(req, res) {
    
    // Get all the input data
    let amount_saved = req.body.amount_saved || 0,
        additional_monthly = req.body.additional_monthly || 0,
        interest_percent = req.body.interest_percent || 1,
        interest_payout = req.body.interest_payout || 1,
        total_months = req.body.total_months || 1
    
    // Init an array to hold data for all the months
    var months = [
        {
            month: 0,
            value: amount_saved
        }
    ]

    // Following the basic compound interest formula of
    // T <- S * ( 1 + R/F )^t
    // T - Total
    // S - Start
    // R - Interest rate
    // F - Rate payout frequency
    // t - Time, in our case as we iterate over each month is always 1

    // Work out the interest value at each month
    for ( var i = 0; i < total_months; i++ ) {

        // The initial amount of the month is value from the month before plus an additional savings added
        var initial_amount = months[months.length - 1].value + additional_monthly
        
        // Work out the total value for the month after interest by timxing the starting value and the interest
        // Intrest could be the monthly, quarterly or yearly interest so divide to work out the month interest
        let after_interest = initial_amount * (1 + ((interest_percent/100)/interest_payout))

        // Add this month to the array
        months.push({
            month: i + 1,
            value: after_interest
        })

    }

    // Return the calculated data to the user
    res.status(201).send(months)

}