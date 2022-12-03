// node create server using express

const express = require('express')
const app = express()


//listening on port 80
const port = 80

//console log server port
app.listen(process.env.PORT || port, () => {
    console.log(`server up on port ${port}`);
})