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
        "titlesWon":1,
    },
    {
        id:2,
        name: 'Leicester',
        logo:'./clubPics/leicester.png',
        league: 'Premier League',
        placeInLeague: 2,
        phone: '1232 412 231',
        city:'Leicester',
        country:'England',
        stadium_name:'King Power Stadium',
        capacity:32312,
        numberOfPlayers:37,
        yearEstablished: 1884,
        manager_name: 'Brendan Rodgers',
        titlesWon :0
    },
    {
        id:3,
        name: 'Man City',
        logo:'./clubPics/mancity.png',
        league: 'Premier League',
        placeInLeague: 3,
        phone: '3123 321 543',
        city:'Manchester',
        country:'England',
        stadium_name:'Etihad',
        capacity:55097,
        numberOfPlayers:37,
        yearEstablished: 1880,
        manager_name: 'Pep Guirdiola',
        titlesWon :3
    },
    {
        id:4,
        name: 'Chelsea',
        logo:'./clubPics/chelsea.png',
        league: 'Premier League',
        placeInLeague: 4,
        phone: '3567 534 766',
        city:'London',
        country:'England',
        stadium_name:'Stamford Bridge',
        capacity:41631,
        numberOfPlayers:40,
        yearEstablished: 1905,
        manager_name: 'Frank Lampard',
        titlesWon:0
    },
    {
        id:5,
        name: 'Juventus',
        logo:'./clubPics/juve.png',
        league: 'Serie A',
        placeInLeague: 1,
        phone: '0312 625 123',
        city:'Turin',
        country:'Italy',
        stadium_name:'Allianz Stadium',
        capacity:41507,
        numberOfPlayers:37,
        yearEstablished: 1892,
        manager_name: 'Maurizzio Sarri',
        titlesWon :1
    }
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