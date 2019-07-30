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
  }
}
