const { getUsers, getUser, createUser, updateUser, deleteUser, searchUser, checkUsername } = require("./controllers/users");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("API");
});

module.exports = router;

router.get("/users", getUsers);
router.get("/user/:username", getUser);
router.get("/users/:query", searchUser);
router.get("/username/:query", checkUsername);
router.post("/user", createUser);
router.put("/user/:username", updateUser);
router.delete("/user/:username", deleteUser);