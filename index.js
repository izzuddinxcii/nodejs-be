const express = require('express')
const app = express()

const port = 4040

app.get('/', (req, res) => res.send('ohsem'))

app.listen(port, () => {
    console.log('listening port' + port)
})