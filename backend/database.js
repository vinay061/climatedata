const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'climatedb',
    user:'root',
    password:''
})

module.exports = connection