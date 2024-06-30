const {Sequelize} = require('sequelize');
const {DATABASE_NAME,DATABASE_USERNAME,DATABASE_PASSWORD} = process.env;

const sequelize = new Sequelize ('my_rt','root','',{

	dialect :'mysql',
	host:'localhost',
	timezone:'+07:00',


})

module.exports = sequelize;