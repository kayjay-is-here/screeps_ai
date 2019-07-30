const _ = require('lodash');
const errHandler = require('errHandler');
/**
*
* @extends RoomPosition
* @extends Creep
**/

/**
* Creep harvesting subroutine.
*
*
* @type {function}
*
*/


Creep.prototype.harvesting = function() {
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

Creep.prototype.upgrading = function() {
  errHandler.throwErr("__upgrading__" , function() {
    let creep = this;
    let roomController = creep.room.find(FIND_MY_STRUCTURES, {filter: (s) => {s.structureType === STRUCTURE_CONTROLLER}});
    if(roomController.length > 1 || !roomController.length) {
      throw "ERR_NOT_IN_RANGE";
    }
    creep.pos.isNearTo(roomController) ? creep.upgradeController(roomController) : creep.moveTo(roomController);
  });
}

/**
*
*
*/

Creep.prototype.battling = function (){
  let creep = this;
  let health = creep.hits;
  let maxHealth = creep.hitsMax;


}

Creep.prototype.transport = function(resource, target) {
  let creep = this;
}

Creep.prototype.checkEnergy = function() {
  let creep = this;
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
    return "harvest";
  } else {
    return "ok";
  }
}
