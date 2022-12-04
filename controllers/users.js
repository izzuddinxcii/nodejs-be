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

const searchUser = (req, res) => {
    Users.find({
        $or: [
          {
            username: { $regex: req.params.query, $options: "i" },
          },
          {
            email: { $regex: req.params.query, $options: "i" },
          },
          {
            phoneNumber: { $regex: req.params.query, $options: "i" },
          },
          {
            skillSets: { $regex: req.params.query, $options: "i" },
          },
          {
            hobby: { $regex: req.params.query, $options: "i" },
          }
        ],
      },(err, user) => {
        if (err) {
        res.send(err);
        }
        res.json(user);
    });
}


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
    let params = {};

    for(let prop in req.body) if(req.body[prop]) params[prop] = req.body[prop];
    
    Users.findOneAndUpdate({ username: req.params.username }, params,
        { new: true },
        (err, users) => {
          if (err) {
            res.send(err);
          } else res.json(users);
        });
  };

const deleteUsers = (req, res) => {
    Users.deleteOne(
      { username: req.params.username },
    ).then(() => res.json({ message: "User Deleted" }))
    .catch((err) => res.send(err));
}

module.exports = {
    getUser,
    searchUser,
    getUsers,
    createUsers,
    updateUsers,
    deleteUsers
};