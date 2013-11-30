function add(a, b) {
  var z = '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
  if(a.length<b.length){
    a = z.substr(0,b.length-a.length)+a;
  }
  if(a.length>b.length){
    b = z.substr(0,a.length-b.length)+b;
  }
  var len = Math.max(a.length,b.length);
  var a1,b1,c1;
  var ret = "";
  c1 = 0;
  for(var i = len-1;i>=0;i -= 1){
    a1 = Number(a[i])
    b1 = Number(b[i])
    c1 = c1 + b1 + a1;
    ret = ''+c1%10 + ret;
    c1 = Math.floor(c1/10);

  }
  if(c1>0){
      ret = ''+c1 + ret;
  }
  return ret; 
}