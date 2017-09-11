var mysql = require('mysql');
var connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123abc',
  database: 'blackswan'
});
module.exports = connection;
