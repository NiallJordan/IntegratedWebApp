import express from 'express';
import stubAPI from './stubAPI';

const router = express.Router(); // eslint-disable-line

router.get('/', (req, res) => {
    const clubs = stubAPI.getAll();
    res.send({clubs: clubs});
});

// get a club
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const club = stubAPI.getClub(id);

       if (club) {
               return res.status(200).send(club);
              }
              return res.status(404).send({message: `Unable to find Club ${id}`});
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const club = stubAPI.getClub(id);

       if (club && stubAPI.delete(id)) {
               return res.status(200).send({message: "Club delted"});
              }
              return res.status(404).send({message: `Unable to find Club ${id}`});
});


router.post('/', (req, res) => {
    const newClub = req.body;
    if (newClub && stubAPI.add(newClub.name,newClub.logo,newClub.league,newClub.placeInLeague,newClub.phone,newClub.city,newClub.country,newClub.stadium_name,newClub.capacity,newClub.numberOfPlayers,newClub.yearEstablished,newClub.manager_name,newClub.titlesWon )){
      return res.status(201).send({message: "Club Created"});
    }
    return res.status(400).send({message: "Unable to find Club in request. No Club Found in body"});
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const club =stubAPI.getClub(id);
    if ( club && stubAPI.update(club.id,club.name,club.logo,club.league,club.placeInLeague,club.phone,club.city,club.country,club.stadium_name,club.capacity,club.numberOfPlayers,club.yearEstablished,club.manager_name,club.titlesWon)){
        return res.status(200).send({message: 'Club Updated'});
    }
    return res.status(400).send({message: 'Unable to find Club in request. No Club Found in body'});
});


export default router;