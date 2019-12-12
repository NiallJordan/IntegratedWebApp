import express from 'express';
import Club from './clubModel';
import asyncHandler from 'express-async-handler';

const router = express.Router(); // eslint-disable-line


// get clubs
router.get('/', async (req, res) => {
    try {
        const clubs = await Club.find();
        res.status(200).json(clubs);
      } catch (error) {
        handleError(res, error.message);
    }
});

// get clubs
router.get('/:id', asyncHandler(async(req, res) => {
    const id = req.params.id;
    try {
        const club = await Club.findById(id);
        res.status(200).json(club);
      } catch (error) {
        handleError(res, error.message);
    }
}));

//Add a club
router.post('/', asyncHandler(async (req, res) => {
    const club = await Club.create(req.body);
    res.status(201).json(club);
}));

//Update an existing club
router.put('/:id', asyncHandler(async (req, res) => {
    if(req,body._id) delete req.body._id;
    const club = await Club.update({
        _id: req.params.id,
    }, req.body, {
        upsert: false,
    });
    if(!club) return res.sendStatus(404);
    return res.json(200,club);
}));

//Remove a club
router.delete('/:id', asyncHandler(async(req, res) => {
    const club = await Club.findById(req.params.id);
    if(!club) return res.send(404);
    await club.remove();
    return res.status(204).send(club);
}));

function handleError(res, err) {
    return res.send(500, err);
};

export default router;