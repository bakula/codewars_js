function add(){
  var ret = 0;
  var f = function(a,b){
    a = a + '';
    b = b + '';
    var addFromString = function (a, b) {
     
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
        if(c1!=0){
            ret = ''+c1 + ret;
        }
        return ret; 
      }
      
      
    var al = 0;
    var bl = 0;
    var arr = a.split(".");
    if(arr.length===2){
      al=arr[1].length;
    }
    if(arr.length!==2 && arr.length!==1){
      return NaN;
    }
    var arr = b.split(".");
    if(arr.length===2){
      bl=arr[1].length;
    }
    if(arr.length!==2 && arr.length!==1){
      return NaN;
    }
    if(al>bl){
      for(var i = 0;i<al-bl;i++){
        b = b + '0';  
      }
    }
    if(bl>al){
      for(var i = 0;i<bl-al;i++){
        a = a + '0';  
      }
    }
   var r = addFromString(a.toString().replace(".",""),b.toString().replace(".","")); 
   var l = Math.max(al,bl);

   if(l>0){
    return r.substr(0,r.length-l)+'.'+r.substr(r.length-l); 
    }else{
    return r;
    }
    
  }
  for(var i =0;i<arguments.length;i++){
    ret = f(ret,arguments[i]);
  }
  var nz = false;
  var r = '';
  for(var i = ret.length-1;i>=0;i--){
    if(ret[i]!=='0'){nz=true;}
    if(nz){
      r = ret[i]+r;
    }
  }
 r = r.replace(/^0+/g,'');
  if(r.length>0 && r.indexOf(".")===0){
    r = '0'+r;
  }
  return r;
  }