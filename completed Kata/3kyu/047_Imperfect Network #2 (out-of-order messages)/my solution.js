function NetworkClient (sendFunction, callback) {
  NetworkClient.idx++;
  this.idx = NetworkClient.idx
  this.sendFunction = sendFunction;
  this.callback = callback;
  NetworkClient.cache = [];
}
NetworkClient.idx = 0;
NetworkClient.prototype.send = function (data) {
    // Could wrap data with extra information to send
    var goIt = false;
    for(var i = 0;i<NetworkClient.cache.length;i += 1){
        if(NetworkClient.cache[i].key===data){
          goIt=true
        } 
    }
    if(!goIt){
      NetworkClient.cache.push({key:data,idx:this.idx,send:true});
      this.sendFunction(data);
    }
    
};

NetworkClient.prototype.recv = function (data) {
    // Could unpack data and validate
      var first = true;
      var go = false;
      for(var i = 0;i<NetworkClient.cache.length;i += 1){
        var c = NetworkClient.cache[i];
        if(c.idx!==this.idx){
         if(c.send){
          if( c.key === data && first){
              go = true;
          }  
          first = false;
        }
        if(go && c.send ){
          this.callback(c.key);    
          c.send = false
        }
        }
      }
     
    
    
   
};