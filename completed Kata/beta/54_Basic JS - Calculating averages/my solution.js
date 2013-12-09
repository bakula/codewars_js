var Calculator = {
 average: function() {
   if(arguments.length==0)return 0;
  var sum = 0;
  for(var i=0;i<arguments.length;i+=1){
    sum += arguments[i];
  }
  return sum/arguments.length;
 }
};