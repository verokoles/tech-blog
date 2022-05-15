const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    // check password auth
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}
// table columns 
User.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true
          }
        },
    
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [4]
          }
        }
      },
  {
      hooks: {
        // beforeCreate lifecycle "hook"
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },
          // beforeUpdate lifecycle "hook" 
        async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
        }
      },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);
module.exports = User;
