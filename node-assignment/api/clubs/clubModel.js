import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ClubSchema = new Schema({
    name: {type: String},
    logo: {type: String},
    league: {type: String},
    placeInLeague: {
        type:Number,
    },
    phone: {type: String},
    city: {type: String},
    country: {type: String},
    stadium_name: {type: String},
    capacity: {
        type:Number,
    },
    numberOfPlayers: {
        type:Number,
    },
    yearEstablished:{
        type:Number,
    },
    manager_name:{type: String},
    titlesWon: {
        type:Number,
    }
});



export default mongoose.model('clubs', ClubSchema)