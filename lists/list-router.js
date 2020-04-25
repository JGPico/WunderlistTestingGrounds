const router = require('express').Router();

const Lists = require('./list-model.js');
// const Users = require('./user-model.js');

router.get('/', (req, res) => {

  Lists.find()
    .then(lists => {
      res.json(lists);
    })
    .catch(err => res.send(err));
});

module.exports = router;

