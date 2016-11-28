const express = require('express');
const router = express.Router();

router.get('/:userid', (req, res) => {
  let userid = req.params.userid
  
  res.json({
    id: userid,
    name: 'Konnor'
  });
});

module.exports = router;
