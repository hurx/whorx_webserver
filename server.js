var express = require('express');
var app = express();
var PORT = 80;
var IP = '127.0.0.1';
app.use(express.static('portal'));

app.get('/',function(req,res){
	var options = {
		root: __dirname + '/portal',
		dotfiles: 'deny',
		headers:{
			'x-timestamp': Date.now(),
			'x-sent': true
		}
	}
	 res.sendFile('./home.html',options,function(err){
	 	if(err){
	 		res.status(err.status).end();
	 	}else{
	 		res.end();
	 	}
	 });
});

app.get('*', function(req, res){
    res.redirect('./404.html');
    res.end();
});

var server = app.listen(PORT,IP);
