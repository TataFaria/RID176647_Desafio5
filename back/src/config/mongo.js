const mongoose = require ('mongoose')


let conn

const connection = () => {
    if (conn) {
        return conn
    }
    
    conn = mongoose.connect('mongodb://localhost:27017')
}

module.exports = connection 