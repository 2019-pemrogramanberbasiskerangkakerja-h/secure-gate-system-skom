var app = require("./app");

var PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', function() {
    console.log('Listening to port:  ' + 3000);
});
