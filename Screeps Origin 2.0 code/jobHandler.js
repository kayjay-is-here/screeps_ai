const errHandler = require('errHandler');
// const OK = "ok";
module.exports = {


  harvester: {
    name: "Harvester",
    role: "harvest",
    parts: [WORK, MOVE, CARRY],
    run: function(creep) {
      errHandler.attempt("harvester" , function() {
        if(creep.checkEnergy() === "ok") {
          creep.transport(RESOURCE_ENERGY, STRUCTURE_SPAWN);
        }
      });
  }
},

  upgrader: {
    name: "Upgrader",
    role: "upgrade",
    parts: [WORK, MOVE, CARRY],
    run: function(creep) {
      errHandler.attempt("upgrader", function () {
        if(creep.checkEnergy() == "ok") {
          creep.upgrading();
        }
      });
    }
  }


};
