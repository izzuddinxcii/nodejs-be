const Users = require("../model/users");

const getUsers  = (req, res) => {
    Users.find((err, todos) => {
      if (err) {
        res.send(err);
      }
      res.json(todos);
    });
  };

  const getUser  = (req, res) => {
    Users.findOne({ username: req.params.username },
        (err, user) => {
      if (err) {
        res.send(err);
      }
      res.json(user);
    });
  };

const createUsers = (req, res) => {
    const users = new Users({
        username: req.body.username,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        skillSets: req.body.skillSets,
        hobby: req.body.hobby
    });

    users.save((err, users) => {
        if (err) {
        res.send(err);
        }
        res.json(users);
    });
};

const updateUsers = (req, res) => {
    Users.findOneAndUpdate(
      { username: req.params.username },
      {
        $set: {
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            skillSets: req.body.skillSets,
            hobby: req.body.hobby
        },
      },
      { new: true },
      (err, users) => {
        if (err) {
          res.send(err);
        } else res.json(users);
      }
    );
  };

const deleteUsers = (req, res) => {
    Users.deleteOne(
      { username: req.params.username },
    ).then(() => res.json({ message: "User Deleted" }))
    .catch((err) => res.send(err));
}

module.exports = {
    getUser,
    getUsers,
    createUsers,
    updateUsers,
    deleteUsers
};