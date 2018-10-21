var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'groceries3'
});

connection.connect();

var getAll = function(callback) {
  var query = "select * from mygroceries3";
  connection.query(query, (error, results, fields) => {
    if (error) {
      callback (error, null);
    } else {
      callback (null, results);
    }
  });
}

var insert = function(item, quantity, callback) {
  var query = `INSERT INTO mygroceries3 (item, quantity) VALUES ("${item}", "${quantity}")`;
  connection.query(query, [item, quantity], (error, results, fields) => {
    callback(error, null);
  });
}

module.exports.getAll = getAll;
module.exports.insert = insert;
