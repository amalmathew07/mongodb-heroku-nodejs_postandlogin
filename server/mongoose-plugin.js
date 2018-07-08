var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true});

//'mongodb://amal:players7@ds131551.mlab.com:31551/playersdb' 
module.exports = {
    mongoose
}