const {sequelize, Sequelize} = require('../routes/db');


const User = sequelize.define('users', {
    userId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userName: {
        type: Sequelize.STRING,
    },
    passWord: {
        type: Sequelize.STRING
    },
    passWordRepeat: {
        type: Sequelize.STRING
    }
});


//创建表
// User.sync();

module.exports = {
    User: User
};