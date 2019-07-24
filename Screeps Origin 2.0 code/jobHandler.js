module.exports = {
  harvester: {
    name: "Harvester",
    role: "harvest",
    run: function(creep) {
      if(creep.carry[RESOURCE_ENERGY] < creep.carryCapacity) {
        creep
      }
    }
  }
};
