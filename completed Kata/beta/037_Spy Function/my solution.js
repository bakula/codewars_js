function spy(func) {
  var ret = {o:func,totalCalls:0};
 
  ret.c=function(){
    ret.totalCalls ++;
    rap.totalCalls =ret.totalCalls ;
    ret.c.history.push({
      'when':new Date(),
      'context':this,
      'args':Array.prototype.slice.call(arguments, 0)
      });
    return ret.o.apply(arguments);
  }
  ret.c.report = function(){
    return rap;
  }
  ret.c.history = [];
  var rap = {totalCalls:ret.totalCalls,history:ret.c.history };
  return ret.c;
}