// Import dependancies
let express = require('express')
let cors = require('cors')
let body_parser = require('body-parser')

// Setup express server
let app = express()

// Setup port
app.set('port', (process.env.PORT || 3001))

// Parse application/json 
app.use(body_parser.json())

// Setup cors
app.use(cors())

// Import routes
let calculate_endpoint = require('./endpoints/calculate')

// Setup routes
app.post('/api/calculate', calculate_endpoint)

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

// Listen on port
app.listen(app.get('port'), () => {
    console.log(`Find the server at: http://localhost:${app.get('port')}/`) // eslint-disable-line no-console
})

// Export so we can test
module.exports = app