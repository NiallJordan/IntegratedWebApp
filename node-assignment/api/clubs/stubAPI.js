import _ from 'lodash';

const clubs=[
    {
        id:1,
        name: 'Liverpool',
        logo:'./clubPics/liverpool.png',
        league: 'Premier League',
        placeInLeague: 1,
        phone: '0151 906 1892',
        city:'Liverpool',
        country:'England',
        stadium_name:'Anfield',
        capacity:54074,
        numberOfPlayers:37,
        yearEstablished: 1892,
        manager_name: 'Jurgen Klopp',
        titlesWon :1
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

const stubAPI = {
    getAll: () => {
        return clubs;
    },

    add: (n, l, lea, pil, p, c, co,sn,cap,nop,ye,mn,tw) => {
        if (!(n && l && lea && pil && p && c && co && sn && cap && nop && ye && mn && tw )) return false;
        let id = 1;
        const last = _.last(clubs);
        if (last) {
           id = last.id + 1;
        }
        let len = clubs.length;
        let newLen = clubs.push({
            'id': id,
            'name': t,
            'logo': l,
            'league': lea,
            'placeInLeague': pil,
            'phone': p,
            'city': c,
            'country': co,
            'stadium_name': sn,
            'capacity': cap,
            'numberOfPlayers': nop,
            'yearEstablished': ye,
            'manager_name': mn,
            'titlesWon': tw
        });
         return newLen > len?id:-1;
        },

    update: (id, n, l, lea, pil, p, c, co,sn,cap,nop,ye,mn,tw) => {
        let result = null;
        if (!(n && l && lea && pil && p && c && co && sn && cap && nop && ye && mn && tw )) return false;
        const index = _.findIndex(clubs,(club) => {
            return club.phone == id;
        });
        const updateClub = stubAPI.getClub(id);
        
        if(index !== -1){
            result =  clubs.splice(index, 1, {
                id: updateClub.id,
                name: updateClub.name,
                logo : updateClub.logo,
                league: updateClub.league,
                placeInLeague: updateClub.placeInLeague,
                phone: updateClub.phone,
                city: updateClub.city,
                country: updateClub.country,
                stadium_name: updateClub.stadium_name,
                capacity: updateClub.stadium_name,
                numberOfPlayers : updateClub.numberOfPlayers,
                yearEstablished: updateClub.yearEstablished,
                manager_name: updateClub.manager_name,
                titlesWon: updateClub.titlesWon
            });
        }
        return result;
    },

    getClub: (id) => {
        let result = null;
        const index = _.findIndex(clubs,
                (club) => {
                return club.phone == id;s
                } );
            if (index !== -1) {
            result = clubs[index];
                }
        return result;
    },


    delete: (id) => {
        let result =null;
        const index = _.findIndex(clubs,(club) => {
            return club.phone == id;
        });
        if( index > -1) {
            result = clubs.splice(index,1);
        }
        return result
    }

};

export default stubAPI;