var ForagerBee = function() {
  Bee.call(this, arguments);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
};
// ForagerBee.prototype.gamble = function(treasure) {
//   this.treasureChest.push(treasure);
// }