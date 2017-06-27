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
    })

})