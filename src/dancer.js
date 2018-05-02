var MakeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
  this.checkPosition();
};

MakeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);

};

MakeDancer.prototype.checkPosition = function() {
  var currentNode = this;
  window.dancers.forEach(function(elem) {
    let totalLeft = parseInt(elem.$node.css('left')) - parseInt(currentNode.$node.css('left'));
    let totalTop = parseInt(elem.$node.css('top')) - parseInt(currentNode.$node.css('top'));
    let length = Math.sqrt(totalLeft*totalLeft + totalTop*totalTop);
    console.log(length);
    if(length < 50) {
      elem.$node.toggleClass('bones');
      currentNode.$node.toggleClass('bones');
    } 
  }); 
};



// MakeDancer.prototype.lineUp = function() {
//   window.dancer.forEach(function(dancer) {
    
//   });
// }


