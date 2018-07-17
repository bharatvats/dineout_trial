
const mysql = require('mysql');

var con = mysql.createConnection({
    host: process.env.mysql_host,
    user: process.env.mysql_user,
    password: process.env.mysql_pass,
    database: process.env.mysql_db
});
con.connect((err, result) => {
    if(err){
        return console.log('something went wrong : ',err);
    }
    console.log('Mysql Connection -good');
});

module.exports = {
    con
}