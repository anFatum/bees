'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('UserModel', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                field: 'ID'
            },
            name: {
                type: Sequelize.STRING,
                field: 'name'
            },
            surname: {
                type: Sequelize.STRING,
                field: 'surname',
                allowNull: true
            },
            email: {
                type: Sequelize.STRING,
                field: 'email',
                unique: true,
                validate: {
                    isEmail: true
                }
            },
            login: {
                type: Sequelize.STRING,
                field: 'login',
                unique: true
            },
            phone: {
                type: Sequelize.STRING,
                field: 'phone',
                allowNull: true
            },
            age: {
                type: Sequelize.INTEGER,
                field: 'age',
                allowNull: true,
                validate: {
                    min: 18
                }
            },
            passHash: {
                type: Sequelize.STRING,
                field: 'passHash'
            },
            passSalt: {
                type: Sequelize.STRING,
                field: 'passSalt'
            },
            isConfirmed: {
                type: Sequelize.BOOLEAN,
                field: 'isConfirmed',
                defaultValue: false
            },
            isActive: {
                type: Sequelize.BOOLEAN,
                field: 'isActive',
                defaultValue: true
            }
        });
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.createTable('users', { id: Sequelize.INTEGER });
        */
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.dropTable('users');
        */
    }
};
