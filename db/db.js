const {Pool} = require('pg')

const pool = new Pool({
 "user":"postgres",
 "password" :  "root",
 "database" : "shopping" ,
 "host" :  "localhost",
 "port" : 5432

})

module.exports=pool;