// node create server using express

const express = require('express')
const app = express()
const router = require("./router")


//listening on port 80
const port = 80

//console log server port
app.listen(process.env.PORT || port, () => {
    console.log('Server up on port');
})

//middleware
app.use(router);