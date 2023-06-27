//todo 테이블 정의
const Todo = function (Sequelize, DataTypes) {
    return Sequelize.define(
        "todo", //시퀄라이즈 모델이름
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false, //NOT NULL,
                primaryKey: true,
                autoIncrement: true,
            },
            title: {
                type: DataTypes.STRING(100),
                allowNull: false,
                defaultValue: null,
            },
            done: {
                type: DataTypes.INTEGER(1),
                allowNull: false,
                defaultValue: 0,
            },
        },
        {
            tableName: "todo", //실제 DB 테이블
            freezeTableName: true,
            timestamps: false,
        }
    );
    //return model;
};

module.exports = Todo;
