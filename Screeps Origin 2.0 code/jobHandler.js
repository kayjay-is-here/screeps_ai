const errHandler = require('errHandler');
// const OK = "ok";
module.exports = {


  harvester: {
    name: "Harvester",
    role: "harvest",
    run: function(creep) {
      errHandler("harvester" , function() {
        if(creep.checkEnergy() === "ok") {
          creep.transport(RESOURCE_ENERGY, STRUCTURE_SPAWN);
        }
      });
  }
},

  upgrader: {
    name: "Upgrader",
    role: "upgrade",
    run: function(creep) {
      errHandler("upgrader", function () {
        if(creep.checkEnergy() == "ok") {
          creep.upgrading();
        }
      });
    }
  }


};
