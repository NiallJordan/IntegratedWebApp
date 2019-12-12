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
    },
    manager_name:String,
    titlesWon: {
        type:Number,
        min:0,
    },
});

ClubSchema.path('yearEstablished').validate((v)=>{
    if(v>2019||v<1700){
        return false;
    }
    return true;
});



export default mongoose.model('Club', ClubSchema)