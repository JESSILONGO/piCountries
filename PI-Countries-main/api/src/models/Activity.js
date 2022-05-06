const {DataTypes} = require ('sequelize');

module.exports = (sequelize) => {
  sequelize.define('activity', {
    name: {
      type: DataTypes.STRING,
    },
    difficulty: {
        type: DataTypes.INTEGER,
        validate: {                                                                //Unicos valores permitidos
            min: 1,
            max: 5,
        }
    },
    duration: {
        type: DataTypes.INTEGER
    },
    season: {
        type: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring')            //Unicos valores permitidos
    }
});
};