module.exports = function(req, res) {

    let amount_saved = req.body.amount_saved,
        additional_monthly = req.body.additional_monthly,
        interest_percent = req.body.interest_percent,
        interest_payout = req.body.interest_payout,
        total_months = req.body.total_months

    var months = [
        {
            month: 0,
            value: amount_saved
        }
    ]

    for ( var i = 0; i < total_months; i++ ) {

        var initial_amount = months[months.length - 1] + additional_monthly
        
        let after_interest = initial_amount * (interest_percent/interest_payout)

        months.push({
            month: i,
            value: after_interest
        })

    }

    res.status(201).send(months)

}