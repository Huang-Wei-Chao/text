const {sequelize, Sequelize} = require('../routes/db');


const Article = sequelize.define('articles', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: Sequelize.STRING
    },
    releaseDate: {
        type: Sequelize.DATE
    },
    author: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.STRING
    }
});

//创建表
//Article.sync();

module.exports = {
    Article: Article
};

