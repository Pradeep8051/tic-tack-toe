const mongoose= require('mongoose')

const playerSchema=mongoose.Schema({
    player1:{
        type:String,
        require:true,
    },
    player2:{
        type:String,
        require:true
    },
    outcome:{
        type:String,
    },
})

module.exports = mongoose.model('Players', playerSchema);

