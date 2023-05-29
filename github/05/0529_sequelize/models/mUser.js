//visitor 테이블 정의
const { DataTypes } = require('sequelize');
const sequelize = require('../models').sequelize;

const user = sequelize.define(
    'user', // sequelize에서 사용될 테이블명
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        userId: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
    },
    {
        tableName: 'user', //실제 DB의 테이블명
        freezeTableName: true, //모델명과 DB테이블명을 동일하게 설정
        timestamps: false, //createdAt과 updatedAt 컬럼을 사용하지 않음
    }
);

module.exports = user;
