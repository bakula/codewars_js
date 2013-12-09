var intersect = function () {
  for(var i = 0;i<arguments.length;i+=1){
    console.log(arguments[i])
  }
  var ret = [];
  if(arguments.length===0)return ret;
  if(arguments.length===1)return arguments[0];
  for(var i = 0;i<arguments[0].length;i+=1){
    var b = arguments[0][i];
    var hitTotal = true;
    for(var j = 1;j<arguments.length;j+=1){
      var a = arguments[j];
      var hit = false;
      for(var k = 0;k<a.length;k+=1){
        if(a[k]==b){
          hit=true;
        }
      }
      if(!hit){
        hitTotal=false;
      }
    }
    if(hitTotal){
        ret.push(b);
    }
  }
  return ret;
};