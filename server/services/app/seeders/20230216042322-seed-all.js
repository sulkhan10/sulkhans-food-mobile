'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {    
   let dataItems = require('../data/db.json').items
   dataItems.map((el)=>{
    delete el.id
    el.createdAt = el.updatedAt = new Date ()
    return el
   })

   let dataCategories = require('../data/db.json').categories
   dataCategories.map((el)=>{
    delete el.id
    el.createdAt = el.updatedAt = new Date ()
    return el
   })
   let dataIngredients = require('../data/db.json').ingredients
   dataIngredients.map((el)=>{
    delete el.id
    el.createdAt = el.updatedAt = new Date ()
    return el
   })
   await queryInterface.bulkInsert('Categories',dataCategories , {});
   await queryInterface.bulkInsert('Items',dataItems , {});
   await queryInterface.bulkInsert('Ingredients',dataIngredients , {});
  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('Ingredients', null, {restartIdentity: true,cascade: true,truncate: true});
   await queryInterface.bulkDelete('Items', null, {restartIdentity: true,cascade: true,truncate: true});
   await queryInterface.bulkDelete('Categories', null, {restartIdentity: true,cascade: true,truncate: true});
  
  }
};
