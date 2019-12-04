const { Model, DataTypes } = require('sequelize');

class sala extends Model {
  static init(sequelize) {
    super.init({
      disciplina: DataTypes.STRING,
      number: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

module.exports = salas;