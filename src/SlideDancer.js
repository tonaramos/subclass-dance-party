var SlideDancer = function(top, left, timeBetweenSteps) {  
  MakeDancer.call(this, top, left, timeBetweenSteps);
  
  this.$node.addClass("luigi");

};

SlideDancer.prototype = Object.create(MakeDancer.prototype);
SlideDancer.prototype.constructor = SlideDancer;

SlideDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);

  this.$node.animate({
    width: [ "toggle", "swing" ],
    height: [ "toggle", "swing" ],
    opacity: "toggle"
  }, 5000, "linear");
};