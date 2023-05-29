//visitor 테이블 정의
const User = function (Sequelize, DataTypes) {
    return Sequelize.define(
        'user', //시퀄라이즈 모델이름
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false, //NOT NULL,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            userid: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            pw: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
        },
        {
            tableName: 'user', //실제 DB 테이블
            freezeTableName: true,
            timestamps: false,
        }
    );
    //return model;
};

module.exports = User;
