import {DataTypes, Model, Sequelize} from 'sequelize';

class ProjectRecordModel extends Model {
  public projectId!: string;
  public profileId!: string;
  public name!: string;
  public description!: string;
  public photoUrl!: string;
  public daysLeft!: number;
  public inDemand!: string[];
  public createdAt!: Date;
  public updatedAt!: Date;
}

const defineProjectModel = (sequelize: Sequelize) => {
  ProjectRecordModel.init(
    {
      projectId: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      profileId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'profile', // This is the referenced table name
          key: 'id', // This is the referenced column in the profiles table
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      photoUrl: {
        type: DataTypes.STRING,
      },
      daysLeft: {
        type: DataTypes.INTEGER,
      },
      inDemand: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      }, createdAt: {
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
      modelName: 'Project',
      tableName: 'project',
    }
  );
};

export {defineProjectModel, ProjectRecordModel};
