'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class pokemonCard extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    pokemonCard.init({
        name: DataTypes.STRING,
        health: DataTypes.STRING,
        type:  DataTypes.STRING,
        pokemonPicture:  DataTypes.STRING,
        energy1:  DataTypes.STRING,
        move1:  DataTypes.STRING,
        number1:  DataTypes.STRING,
        energy2:  DataTypes.STRING,
        move2:  DataTypes.STRING,
        number2:  DataTypes.STRING,
        weaknessImg:  DataTypes.STRING,
        resistanceImg:  DataTypes.STRING,
        retreatCostImg:  DataTypes.STRING
    }, {
        sequelize,
        modelName: 'pokemonCard',
        tableName: 'pokemoncard',
        timestamps:false
    });
    return pokemonCard;
};