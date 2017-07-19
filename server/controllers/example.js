const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send([
    {
      id: 1,
      text: 'Data 1',
    },
    {
      id: 2,
      text: 'Data 2',
    },
    {
      id: 3,
      text: 'Data 3',
    },
    {
      id: 4,
      text: 'Data 4',
    },
  ]);
});

module.exports = router;
