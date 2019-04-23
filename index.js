const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : '172.18.0.2',
  user     : 'stargram_test',
  password : 'stargram_test',
  port     : 3306,
  database : 'stargram_test'
});

connection.connect();

connection.query('SELECT * from member', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.', err);
});

connection.end();