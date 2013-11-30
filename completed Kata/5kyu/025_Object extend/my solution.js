var extend = function() {
  var ret = {};
  for(var i = 0;i<arguments.length;i += 1){
    var o = arguments[i];
    if(isObject(o)){
      for (var key in o) {
        if(typeof ret[key] === 'undefined'){
          ret[key] = o[key];
        }
      }  
    }
  }
  return ret;
}