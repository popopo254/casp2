const mysql = require('mysql2')
require('dotenv').config();
// create database connection
let con = mysql.createConnection({ 
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306
})
const ReloadConnect = () =>{
  con.connect((err) => {
    if (err) {
      console.log(err)
      setTimeout(ReloadConnect, 2000)
    } else {
      console.log('ConnectDB');
    }
  })
}

ReloadConnect()



module.exports = con