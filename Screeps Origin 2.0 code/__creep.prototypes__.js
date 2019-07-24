/**
* Creep harvesting subroutine.
*
* @type {function}
*
*/

Creep.prototype.harvest = function() {
  let creep = this; // Reference self as a creep instance of Creep
  //var _this = this;
  let stored_sources = creep.room.find(FIND_STRUCTURES, {filter: (s) => {
    return (s.structureType == STRUCTURE_CONTAINER
    || s.structureType == STRUCTURE_STORAGE
  ) && s.store[RESOURCE_ENERGY] >= 50
}});
  if (stored_sources) { // Undefined is falsy
    let target = creep.pos.findClosestByRange(stored_sources); /** @todo check if valid */
    creep.pos.isNearTo(target) ? creep.withdraw(target, RESOURCE_ENERGY) : creep.moveTo(target);
  } else { // Found no avalible stored sources
    let natural_sources = creep.room.find(FIND_SOURCES_ACTIVE);
    let target = creep.pos.findClosestByRange(natural_sources);
    if (natural_sources) {
      creep.pos.isNearTo(target) ? creep.harvest(target) : creep.moveTo(target);
    }
  }
}


/**
*
*
*
*/

Creep.prototype.upgrade = function() {
  let creep = this;
}

/**
*
*
*/

Creep.prototype.battle = function (){
  let creep = this;
}

Creep.prototype.transport = function(target) {
  
}
