const {User} = require('../models');

const userData = [
    {
        username: 'rastamon',
        password: 'password1'
    },
    {
        username: 'minimon',
        password: 'password2'
    },
    {
        username: 'mayjahmon',
        password: 'password3'
    },
    {
        username: 'dude',
        password: 'password4'
    },
    {
        username: 'dudette',
        password: 'password5'
    },
    {
        username: 'husky',
        password: 'password6'
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;