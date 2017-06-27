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

        it('it should properly calculate value after x months', (done) => {

            chai.request(server)
                .post('/api/calculate')
                .send({
                    amount_saved: 1000,
                    additional_monthly: 100,
                    interest_percent: 2,
                    interest_payout: 1,
                    total_months: 12
                })
                .end((err, res) => {
                    res.should.have.status(201)
                    let response_value = res.body[res.body.length - 1].value
                    chai.assert(response_value > 2636 && response_value < 2637, "Did not work out correct interest")
                    done()
                })
        })

    })

})