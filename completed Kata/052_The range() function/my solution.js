function range(start, end, step) {
  console.log(start, end, step);

  if(arguments.length===1){
    end = start;
    start = 0;
    step = 1;
  }
  if(arguments.length===2){
    step = 1;
  }
  if(step != parseInt(step)){
    return
  }
  
  
  var ret = [];
  if(step>0){
    for(var i = start;i<end;i += step){
      ret.push(i);
    }
  }
  if(step<0){
    for(var i = start;i>end;i += step){
      ret.push(i);
    }
  }
  if(step == 0){
    for(var i = start;i<end;i += 1){
      ret.push(start);
    }
  }
  return ret;
}