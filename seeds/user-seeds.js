const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
    {
        username: 'admin',
        email: 'admin@example.com',
        password: 'admin'
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;