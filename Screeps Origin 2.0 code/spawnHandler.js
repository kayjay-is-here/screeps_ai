const _ = require('lodash');
const jobHandler = require('jobHandler');
const errHandler = require('errHandler');
module.exports = {
  handle : function (spawn) {
    /** @TODO Finish SpawnHandler **/
      for (let name in Game.creeps) {
        let creep = Game.creeps[name];
        errHandler.attempt("Creep Running" , function() {
          jobHandler[creep.memory.role].run();
        });
      }

      if (spawn.spawning) {
                    var spawningCreep = Game.creeps[spawn.spawning.name];
                    spawn.room.visual.text(
                        '🛠️' + spawningCreep.memory.role,
                        spawn.pos.x - 5,
                        spawn.pos.y, {
                            align: 'left',
                            opacity: 0.8
                        });
                }
  }
}
