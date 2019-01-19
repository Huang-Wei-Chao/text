const {sequelize, Sequelize} = require('../routes/db');


const Image = sequelize.define('images', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    albumName: {
        type: Sequelize.STRING
    },
    avatarName: {
        type: Sequelize.STRING
    },
    releaseDate: {
        type: Sequelize.DATE
    },
    author: {
        type: Sequelize.STRING
    }
});

//创建表
//Image.sync();

module.exports = {
    Image: Image
};

