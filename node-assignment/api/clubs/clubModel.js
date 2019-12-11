import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ClubSchema = new Schema({
    name: String,
    logo: String,
    league: String,
    placeInLeague: {
        type:Number,
        min:0,
        max:30,
    },
    phone: String,
    city: String,
    country: String,
    stadium_name: String,
    capacity: {
        type:Number,
        min:2000,
        max:100000
    },
    numberOfPlayers: {
        type:Number,
        min:0,
        max:100
    },
    yearEstablished:{
        type:Number,
        min:0,
        max:2019,
    },
    manager_name:String,
    titlesWon: {
        type:Number,
        min:0,
    },
});

export default mongoose.model('Club', ClubSchema)