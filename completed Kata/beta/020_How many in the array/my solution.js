Array.prototype.numberOfOccurrences = function(value){
  var ret = 0;
  for(var i = 0;i<this.length;i++){
    if(this[i] === value){
      ret++;
      }
  }
  return ret;
  }