var mongoose = require('mongoose');

var player = mongoose.model('Players', {
    player : {
        type: String
    },
    team : {
        type:String
    }, 
    ranking: {
        type: Number
    }
});

module.exports = {
    player
}