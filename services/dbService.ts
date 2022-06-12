const mysql = require('promise-mysql')

const dbService = async() => {
    const db = await mysql.createConnection({
        user: 'root',
        password: 'password',
        database: 'birdup'
    })

    return db
}

module.exports = dbService