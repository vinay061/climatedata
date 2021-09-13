const express = require('express')
const app = express()
const cors = require('cors')
const port = 4000
const connection = require('./database')
let counter = 0
app.use(cors())

app.get('/climate', cors(), function (req, res) {
    let sqlquery = 'SELECT * FROM temperature'
    connection.query(sqlquery, (error, results) => {
        if(error) throw error
        counter++
        res.send(results)
        console.log(typeof(results))
        console.log(`You have connected ${counter} times`)
    })
})

app.listen(port, () => {
    console.log(`Listening on port ${port} at http://localhost:${port}`)
    connection.connect((err) => {
        if(err) throw err
        console.log('Database Climate Connected')
    })
})