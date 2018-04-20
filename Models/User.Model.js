module.exports = (sequelize, DataTypes) => {
    const UserModel =  sequelize.define('UserModel', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'ID'
        },
        name: {
            type: DataTypes.STRING,
            field: 'name'
        },
        surname: {
            type: DataTypes.STRING,
            field: 'surname',
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            field: 'email',
            unique: true,
            validate: {
                isEmail: true
            }
        },
        login: {
            type: DataTypes.STRING,
            field: 'login',
            unique: true
        },
        phone: {
            type: DataTypes.STRING,
            field: 'phone',
            allowNull: true
        },
        age: {
            type: DataTypes.INTEGER,
            field: 'age',
            allowNull: true,
            validate: {
                min: 18
            }
        },
        passHash: {
            type: DataTypes.STRING,
            field: 'passHash'
        },
        passSalt: {
            type: DataTypes.STRING,
            field: 'passSalt'
        },
        isConfirmed:{
            type: DataTypes.BOOLEAN,
            field: 'isConfirmed',
            defaultValue: false
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            field: 'isActive',
            defaultValue: true
        }
    });
    return UserModel;
};