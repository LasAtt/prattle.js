var router = require('express').Router();

router.get('/:chat_id', (req, res, chat_id) => {
  var messages = req.db.get('messages');
  messages.find({"chat_id": chat_id}).then((results) => {
    res.send(results);
  });
});

module.exports = router;
