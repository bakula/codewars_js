function Binary(valueIn,type){
  this._isValid = false;
  var radix = 10;
  if(type ===2){
    radix = 16;  
  }
  var value = parseInt(valueIn,radix);
  if(radix===10 && value!=valueIn){
   return;
  }
  if(isNaN(value)){
      return;
  }
 if(value>255 || value<0){
    return;
  }
  
  this._isValid = true;
  this.value = value;
}
Binary.prototype = {
  getBit: function (bitIndex) {
    if(!this._isValid) return false;
    bitIndex = parseInt(bitIndex,10);
    if(isNaN(bitIndex)){
      return false;
    }
    if(bitIndex>7 || bitIndex<0){
      return false;  
    }
    if ((this.value & 1 << bitIndex)===0){
      return 0;
    }else{
      return 1;
    }
  },
  toString: function () {
    if(!this._isValid) return '';
    var ret = "";
    for (var i = 0;i<8;i++){
      ret = this.getBit(i)+ret; 
    }
    return ret;
  },
  isValid: function(){
    return this._isValid;  
  }
};