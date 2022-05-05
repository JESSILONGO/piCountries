const {DataTypes} = require ('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cca3: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    flags: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING
    },
    area: {
      type: DataTypes.DECIMAL
    },
    population: {
      type: DataTypes.INTEGER
    }
  },{timestamps: false});
};
