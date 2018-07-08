var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('./mongooseplug');
var bodyparser = require('body-parser');
var player = require('./models/user').player;
var loginUser = require('./models/logindet').loginUser;

var app = express();
app.use(bodyparser.json());

//Add users login details
app.post('/addlogin',(req,res) => {
    var currLogin = new loginUser({username: req.body.uname,password:req.body.password});
    currLogin.save().then((doc) => {
        res.json(doc);
    }).catch((err) => {
        res.status(400).send(err);
    })
});

//Secure with JWT
app.post('/login',(req,res) => {

});

//Using MongoClient
app.post('/updateMong',(req,res)=> {
    MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
    if (err) {
        throw err;
        client.close();
    }

    const db = client.db('TodoApp');

    db.collection('players').updateOne({player:'Harry Kane'},{$set:{player:'Trippier'}},{returnOriginal:false})
    .then((docs) => {
        res.json(docs);
    }).catch((err) => {
        res.status(400).send(err);
    })
});
}) 

//using mongoose
app.post('/save',(req,res) => {

    var createUser = new player({
        player : req.body.player, team:'England',rank:1
    })

    createUser.save().then((doc) => {
        res.json(doc);
    }).catch((err) => {
        res.status(400).send(err);
    })
})

app.get('/getplayer',(req,res) => {
    player.find({player:/^Harry/}).then((doc) => {
        res.json(doc);
    }).catch((err) => {
        res.status(400).send(err);
    })
});

app.get('/getplayer/:id',(req,res) => {
    var id = req.params.id;

    player.findById(id).then((doc) => {
        res.json(doc);
    })
})

app.listen(3000,() => {

})

