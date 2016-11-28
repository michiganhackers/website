const express = require('express');
const router = express.Router();

router.get('/:eventid', (req, res) => {
  let eventid = req.params.eventid

  res.json({
    id: eventid,
    location: '1670 BBB'
  });
});

module.exports = router;
