const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const path = require('path');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(express.json());

app.use(function(request, response, next){
	console.log(`requesting ${request.url} using ${request.method}`);
	console.log(request.params);
	console.log(request.body);
	next();
})


///routes\\\\
require('./server/config/routes.js')(app);


app.listen(5000, () => console.log("listening on port 5000"));