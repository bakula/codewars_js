function UriBuilder(str){
  this.params = {};
  this.url = "";
  if(str.indexOf("?")>-1){
    var a = str.split("?");
    var b = a[1].split("&")
    for(var i=0;i<b.length;i++){
      var c = b[i];
      if(c.indexOf("=")>-1){
        var d = c.split("=");
        this.params[d[0]] = d[1];
      }else{
        this.params[c] = "";
      }
    }
    this.url = a[0];
  }else{
    this.url = str;  
  }
  this.build = function(){
    var p = [];
    for(key in this.params){
      if(this.params[key]!==""){
        p.push(key+'='+this.params[key])
      }else{
        p.push(key)  
      }
      
    } 
    if(p.length>0){
      return encodeURI(this.url+'?'+p.join("&"));  
    }else{
      return encodeURI(this.url)
    }
  }
}