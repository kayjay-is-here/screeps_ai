module.exports = {


  harvester: {
    name: "Harvester",
    role: "harvest",
    run: function(creep) {
      if (typeof creep.memory.harvesting == "undefined") {
        creep.memory.harvesting = true;
      }
      if (creep.carry[RESOURCE_ENERGY] == 0 && !creep.memory.harvesting) {
        creep.memory.harvesting = true;
      }
      if (creep.carry[RESOURCE_ENERGY] == creep.carryCapacity) {
        creep.memory.harvesting = false;
      }

      if(creep.memory.harvesting) {
        creep.harvesting();
      } else {
        creep.transport(RESOURCE_ENERGY, STRUCTURE_SPAWN);
      }
    }
  },

  upgrader: {
    name: "Upgrader",
    role: "upgrade",
    fun: function(creep) {
      
    }
  }


};
