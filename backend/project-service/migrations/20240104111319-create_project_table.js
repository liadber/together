'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('project', {
      projectId: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      profileId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'profile', // The name of the referenced table
          key: 'id',        // The name of the referenced column
        },
        onUpdate: 'CASCADE', // Optional: cascade update on profile id changes
        onDelete: 'CASCADE', // Optional: cascade delete on profile deletion
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
      },
      photoUrl: {
        type: Sequelize.STRING,
      },
      daysLeft: {
        type: Sequelize.INTEGER,
      },
      inDemand: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('project');
  },
};
