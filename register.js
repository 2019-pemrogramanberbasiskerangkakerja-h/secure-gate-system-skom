mysql = require('mysql')

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'SCS_SKOM'
});


exports.register = function(req,res){
  // console.log("req",req.body);
  var user={
    "nrp":req.body.nrp,
    "nama":req.body.nama,
    "role":req.body.role,
    "password":req.body.password
  }
  connection.query('INSERT INTO user SET ?',user, function (error, results, fields) {
  if (error) {
    console.log("error ocurred",error);
    res.send({
      "code":400,
      "failed":"error ocurred"
    })
  }else{
    console.log('The solution is: ', results);
    res.send({
      "code":200,
      "success":"user registered sucessfully"
        });
  }
  });
}