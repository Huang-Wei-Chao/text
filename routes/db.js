const Sequelize = require('sequelize');
const sequelize = new Sequelize('ymstars', 'ymstars', 'ymstars', {
    host: 'localhost',
    dialect: 'mysql',
    charest: 'utf-8',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});


// sequelize
//     .authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });


module.exports = {
    sequelize: sequelize,
    Sequelize: Sequelize,
};




