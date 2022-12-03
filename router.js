const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("NodeJS API Server");
});

module.exports = router;