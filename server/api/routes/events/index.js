const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    events: [
      {
        id: 1
      },
      {
        id: 2
      },
      {
        id: 3
      }
    ]
  });
});

router.use('/', require('./event'));

module.exports = router;
