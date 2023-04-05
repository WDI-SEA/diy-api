const express = require('express')
const app = express()
const PORT = 8000



app.use('/workout', require("./controllers/workout"))











app.listen(PORT, () => {console.log(`live on ${PORT}`)}
)