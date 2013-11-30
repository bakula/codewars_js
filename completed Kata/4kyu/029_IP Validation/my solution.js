function isValidIP(str) {
  var a = str.split(".");
  if(a.length !== 4){return false;}
  for(var i=0;i<4;i++){
    var c = a[i];
    try{
      var n = parseInt(c);
      
      if( n<0 || n>255 ){
          return false;
      }
      if(''+n !== c){
        return false;  
      }
    }
    catch(e){
      return false;
    }
  }
  return true;
}