//This function should return n!
function factorial (n) {
  if(n<0)return null;
  if(n===0) return 1;
  var ret = 1
  for(var i=1;i<=n;i++){
    ret = ret*i;
  }
  console.log(ret);
  return ret;
}