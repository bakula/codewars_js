//Extend the String object with toBase64() and fromBase64() functions
String.prototype.toBase64 = function(){

  var asci = function(b){
    var a =  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    return a[parseInt('00'+b,2)];
  }
  var txt = ''
  for(var i = 0;i<this.length;i=i+3){
    var s = this.byteAt(i)+this.byteAt(i+1)+this.byteAt(i+2)+this.byteAt(i+2);
    txt += asci(s.substr(0,6))+asci(s.substr(6,6))+asci(s.substr(12,6))+asci(s.substr(18,6));
  }
  if(this.length%3===1){
    var s = this.byteAt(this.length-1)+'0000000000000000';
    txt += asci(s.substr(0,6))+asci(s.substr(6,6)); 
  }
  if(this.length%3===2){
    var s = this.byteAt(this.length-2)+this.byteAt(this.length-1)+'00000000';
    txt += asci(s.substr(0,6))+asci(s.substr(6,6))+asci(s.substr(12,6));
  }
  
  return txt;
}
String.prototype.fromBase64 = function(){
    var dec2Bin = function (dec){
       var ret = (dec >>> 0).toString(2);
      return ('00000000'.substr(0,8-ret.length)+ret).substr(2);
    }
    var a =  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var txt = '';
    for(var i = 0;i<this.length;i=i+1){
      txt += dec2Bin(a.indexOf(this[i]));
    }

    var ret = '';
    for(var i = 0;i<txt.length;i=i+8){
      ret += String.fromCharCode(parseInt(txt.substr(i,8),2));
    }
    return ret;
}

String.prototype.byteAt = function(idx){
  var dec2Bin = function (dec){
    var ret = (dec >>> 0).toString(2);
    ret =  '00000000'.substr(0,8-ret.length)+ret;
     return ret;
  }
  var v = this.charCodeAt(idx);
  return dec2Bin(v);
}