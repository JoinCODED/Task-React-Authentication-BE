const express = require('express');
const passport = require('passport');

const {
  getRooms,
  createRoom,
  updateRoom,
  deleteRoom,
  createMsg,
} = require('../controllers/roomsController');

const router = express.Router();

router.get('/', getRooms);
router.post('/', passport.authenticate('jwt', { session: false }), createRoom);
router.delete(
  '/:roomId',
  passport.authenticate('jwt', { session: false }),
  deleteRoom
);
router.put(
  '/:roomId',
  passport.authenticate('jwt', { session: false }),
  updateRoom
);
router.post(
  '/msg/:roomId',
  passport.authenticate('jwt', { session: false }),
  createMsg
);

module.exports = router;
