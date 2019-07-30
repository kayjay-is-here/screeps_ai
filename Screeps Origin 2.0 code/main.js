try {
   const _ = require('lodash');
   const jobHandler = require('jobHandler');
   const spawnHandler = require('spawnHandler');
   //import Console from './Console'

   global.setLogLevel = function(level) {
     /** @TODO FINISH FUNCTION*/
   }

   /* Colors text. Returns HTML Formatted text. */
function colorText(strokeColor, text, textType) {
    if (typeof textType === "undefined") {
        textType = "";
    } else {
        textType = " type='" + textType + "'";
    }
    return "<font color=" + strokeColor + textType + ">" + text + "</font>";
}
global.roomLink = function(roomname) {
        return '<a href=#!/room/' + Game.shard.name + '/' + roomname + '  style="color:#E38217">' + roomname + '</a>';
    };
  function roomLink(roomname) {
        return '<a href=#!/room/' + Game.shard.name + '/' + roomname + '  style="color:#E38217">' + roomname + '</a>';
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
