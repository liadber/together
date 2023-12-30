// models/User.ts

import {DataTypes, Model, Sequelize} from 'sequelize';

class Profile extends Model {
  public id!: string;
  public name: string;
  public description: string;
  public createdAt!: Date;
  public updatedAt!: Date;

  constructor() {
    super();
    this.name = ''; // or provide a default value
    this.description = ''; // or provide a default value
  }
}

const defineProfileModel = (sequelize: Sequelize) => {
  Profile.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    },
    {
      sequelize,
      modelName: 'Profile',
      tableName: 'profile',
    }
  );
};

export {defineProfileModel, Profile};
