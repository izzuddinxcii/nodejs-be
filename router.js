const { getUsers, getUser, createUsers, updateUsers, deleteUsers } = require("./controllers/users");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("NodeJS API Server");
});

module.exports = router;

router.get("/users", getUsers);
router.get("/user/:username", getUser);
router.post("/users", createUsers);
router.put("/users/:username", updateUsers);
router.delete("/users/:username", deleteUsers);