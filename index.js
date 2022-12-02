const express = require('express')
const app = express()

const port = 80

app.get('/', (req, res) => res.send('ohsem lah'))

app.listen(process.env.PORT || port, () => {
    console.log('listening port' + port)
})

module.exports = app