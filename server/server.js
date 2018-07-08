var express = require('express');
var bodyparser = require('body-parser');
var jwt = require('jsonwebtoken');
var Team = require('./models/teams').Team;
var mongoose = require('./mongoose-plugin');
var app = express();

app.post('/maketeam', (req,res) => {
    var team = new Team({manager : "Akhil", teamname: "England"});

    team.save().then(() => {
        jwt.sign({team},'salt',(err,token) => {
            res.header('x-auth',token).json(team);
        })
    }).catch((err) => {
        res.send(err);
    })    
    
})

app.get('/getteam', verifyToken,(req,res) => {

    Team.findOne({manager:"Akhil"}).then((doc) => {
        jwt.verify(req.token,'salt',(err,data) => {
            if (err) {
                res.status(401).send("Not Authorized");
            } else {
                res.json(doc);
            }
        })
    }).catch((err) => {
        res.status(401);
    })
    
});

function verifyToken(req,res,next) {
    req.token = req.headers['x-auth'];

    next();
}

app.listen(3000);