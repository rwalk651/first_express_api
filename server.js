let express = require('express')
let routes = require('./routes/routes.js')
let path = require('path')

let app = express()

app.use(express.static(path.join(__dirname, 'hello-vue', 'dist')))

app.use('/api', routes)

let server = app.listen(process.env.PORT || 3000, function() {
    console.log('express server running on port', server.address().port)
})