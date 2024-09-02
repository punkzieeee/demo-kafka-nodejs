const express = require('express');
const app = express();
const producer = require('./producer');

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post("/send-kafka", function(req, res) {
    console.log(req.body);
    var username = req.body.username
    var message = req.body.message
    producer.sendKafka(username, message)
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({status: 200, message: 'message sent!'}))
});

var server = app.listen(5000, function() {
    console.log("Express App running at http://localhost:5000/")
})