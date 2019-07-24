try {
   const _ = require('lodash');
   const jobHandler = require('jobHandler');
   const spawnHandler = require('spawnHandler');
   

   global.setLogLevel = function(level) {
     /** @TODO FINISH FUNCTION*/
   }

   function colorText(color, text) {
     return ""; /** @TODO FINISH FUNCTION*/
   }

   module.exports.loop = function(){
     for (let roomId in Game.rooms) {
       let room = Game.rooms[roomId];
       for (let spawnId in room) {
         let spawn = Game.spawns[spawnId];
         spawnHandler.handle(spawn);
       }
     }
   }
} catch (err) {
  console.log("An Error has occured executing the main code.");
  console.log(err.stack);
}
