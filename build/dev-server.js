const bodyParser = require('body-parser')

module .exports = app => {
    app.user(bodyParser.json())
}