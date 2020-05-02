const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const cors = require('cors')
const port = process.env.PORT || 8080;
const api = require('./routes/api');
const app = express();
app.use(cors())

app.use(bodyParser.json()); 
app.use('/api', api);
app.use(express.static(__dirname + '/angular-build'));
app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname, 'angular-build', 'index.html'))
    });

app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});