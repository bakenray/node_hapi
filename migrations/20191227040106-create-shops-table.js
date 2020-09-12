'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('shops', 
      { 
        id:{
          type:Sequelize.INTEGER,
          autoIncrement:true,
          primaryKey:true
        },
        name:{
          type:Sequelize.STRING,
          allowNull:false
        },
        thumb_url:Sequelize.STRING,
        created_at:Sequelize.DATE,
        updated_at:Sequelize.DATE
      }
      );
  },

  down: (queryInterface) => {
      return queryInterface.dropTable('shops');
  }
};