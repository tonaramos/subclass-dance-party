var SlideDancer = function(top, left, timeBetweenSteps) {  
  MakeDancer.call(this, top, left, timeBetweenSteps);
  
  this.$node.addClass("bowser");
};

SlideDancer.prototype = Object.create(MakeDancer.prototype);
SlideDancer.prototype.constructor = SlideDancer;

SlideDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);

  this.$node.toggleClass('rotate');
};