const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.belongsTo(models.role, {
        foreignKey: 'user_role_id',
        as: 'role'
      });

      user.belongsTo(models.line_managers, {
        foreignKey: 'manager_id',
        as: 'line_manager'
      });
    }
  }
  user.init({
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        notEmpty: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 8,
        notEmpty: true
      }
    },
    verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      validate: {
        notEmpty: true
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    language: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    profile_picture: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    user_role_id: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 2,
      validate: {
        notEmpty: true
      },
    },
    manager_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        notEmpty: true
      }
    }
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};
