

module.exports = function() {
  this.info = {
    shipName: null,
    captain: null,
    firstOfficer: null,
    cheifEngineer: null,
    tacticalOfficer: null,
    helmsman: null
  };

  this.position = [500, 300];

  this.destination = {
    name: 'Sol',
    position: [500, 300],
    jursidiction: 'Frederation'
  };

  this.speed = 0;
};
