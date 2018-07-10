var express = require('express');
var model = require('./models/model1').model;
var app = express();

var MongoClient = require('mongodb').MongoClient;

var bodyparser = require('body-parser');

var mongoose = require('./mongoosep').mongoose;

app.get('/' ,(req,res) => {
    const model1 = new model({name:"aaa"});
    model1.save().then ((doc) => {
        res.send(doc);
    }).catch((err) => {
        res.send(err);
    });
});

MongoClient.connect('url',(err,client) => {
    const db = client.db('module');

    db.Collection('module').insertOne({name : "AAAA"}).then((doc) => {
        
    })
})

