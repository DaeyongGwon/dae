//visitor 테이블 정의
exports.visitor = (sequelize, DataTypes) => {
    return sequelize.define(
        'visitor', // sequelize에서 사용될 테이블명
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            comment: {
                type: DataTypes.TEXT('medium'),
                allowNull: true,
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: sequelize.literal('now()'),
            },
        },
        {
            tableName: 'visitor', //실제 DB의 테이블명
            freezeTableName: true, //모델명과 DB테이블명을 동일하게 설정
            timestamps: false, //createdAt과 updatedAt 컬럼을 사용하지 않음
        }
    );
};
