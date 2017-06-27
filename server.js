// Import dependancies
let express = require('express')

// Setup express server
let app = express()
app.set('port', (process.env.PORT || 3001))

// Import routes
let calculateEndpoint = require('./endpoints/calculate')

// Setup routes
app.post('/api/calculate', calculateEndpoint)

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