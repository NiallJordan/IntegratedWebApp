import _ from 'lodash';

const clubs=[
    {
        id:"1",
        name: 'Liverpool',
        logo: './clubPics/liverpool.png',
        league: 'Premier League',
        placeInLeague: 1,
        phone: '0151-976-1892',
        city: 'Liverpool',
        country: 'England',
        stadium_name: 'Anfield',
        capacity: 54074,
        numberOfPlayers: 37,
        yearEstablished: 1892,
        manager_name: 'Jurgen Klopp',
        titlesWon: 1,
    },
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
        if(index !== -1){
            result =  clubs.splice(index, 1, {
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
                return club.phone == id;
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