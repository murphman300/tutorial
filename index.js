const express = require('express');

const app = express();

app.get('/', function() {
	res.send('HEY!');
});

app.listen(3000, function() {
	console.log('Listening on 3000');
})

