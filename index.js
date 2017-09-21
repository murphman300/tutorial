const express = require('express');

const app = express();

app.get('/', function(req, res) {
    console.log('Recieving home GET');
    res.send(JSON.stringify({
        reply: 200,
        message: "Welcome, you are accessing a private endpoint..."
    }))
});

app.get('/meta/host', function(req, res) {
    let exec = require('child_process').exec;
    let command = exec("curl http://169.254.169.254/latest/meta-data/public-hostname", async function (err, stdout, stderr) {
        if (err) console.log('SOME ERROR: ' +err);
        res.send(stdout);
    });
});

app.get('/meta', function(req, res) {
    let exec = require('child_process').exec;
    let command = exec("curl http://169.254.169.254/latest/meta-data/", async function (err, stdout, stderr) {
        if (err) console.log('SOME ERROR: ' +err);
        res.send(JSON.stringify(stdout));
    });
});

app.listen(3000, function() {
    console.log('Listening on 3000');
});
