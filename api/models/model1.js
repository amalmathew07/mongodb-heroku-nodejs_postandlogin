var mongoose = require('mongoose');

var modelSchema = new mongoose.Schema('model', {
    name : {

    },
    age : {

    }
});

var model = ('model',modelSchema);

module.exports = {
    model
}