let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../server')
let should = chai.should()

chai.use(chaiHttp)

describe('calculate', () => {

    describe('POST /calculate', () => {
      
        it('it should be a valid HTTP request', (done) => {
            chai.request(server)
                .post('/api/calculate')
                .end((err, res) => {
                    res.should.have.status(201)
                    done()
                })
        })

        it('it should properly calculate ', (done) => {

            let amount_saved = 100,
                additional_monthly = 0,
                interest_percent = 1.01,
                interest_payout = 1,
                total_months = 5

            chai.request(server)
                .post('/api/calculate')
                .send({
                    amount_saved,
                    additional_monthly,
                    interest_percent,
                    interest_payout,
                    total_months
                })
                .end((err, res) => {
                    res.should.have.status(201)
                    done()
                })
        })

    })

})