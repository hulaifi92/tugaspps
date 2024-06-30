//import datatype sequelize
const {DataTypes} = require('sequelize')

//import sequelize
const sequelize = require('../utils/database');

//buat model
const jadwal = sequelize.define('jadwal',{

    idjadwal:{
        type:DataTypes.UUID,
        primaryKey:true,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false

    },

    keterangan:{
        type:DataTypes.STRING,
        allowNull:false
    },

    ketupel:{
        type:DataTypes.STRING,
        allowNull:false
    },

    tgl:{
        type:DataTypes.DATE,
        allowNull:false
    },

    tempat:{
        type:DataTypes.STRING,
        allowNull:false
    },

    pemateri:{
        type:DataTypes.STRING,
        allowNull:false
    },

},
{
    underscored:true,

}
);

module.exports = jadwal;
