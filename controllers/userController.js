// controllers/userController.js
const db = require('../util/dbconfig');

const getUsers = (req, res) => {
    const sql = 'Select id, username from users';
    const callback = (err, data) => {
        if (err) {
            console.log('Query Error!');
            return res.status(500).send('Query Failed!');
        }
        res.send({ users: data });
    };

    db.sqlConnect(sql, [], callback);
};

module.exports = { getUsers };