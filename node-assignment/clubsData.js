import clubModel from './api/clubs/clubModel';

const clubs=[
    {
        'name':'Liverpool',
        'logo':'./web-app-assignment1/public/clubPics/arsenal.png',
        'league':'Premier League',
        'placeInLeague':1,
        'phone':'0151-976-1892',
        'city':'Liverpool',
        'country':'England',
        'stadium_name':'Anfield',
        'capacity':54074,
        'numberOfPlayers':37,
        "yearEstablished":1892,
        "manager_name":'Jurgen Klopp',
        "titlesWon":1
    },
];

export default async function loadClubs(){
    try{
        await clubModel.deleteMany();
        await clubModel.collection.insertMany(clubs);
        console.info(`${clubs.length} clubs were sucessfully stored`);
    } catch (err){
        console.error(`Failed to load Club data: ${err}`);
    }
}