var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://amal:players7@ds131551.mlab.com:31551/playersdb' 
|| 'mongodb://localhost:27017/TodoApp',{useNewUrlParser: true});



module.exports = {
    mongoose
}