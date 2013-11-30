function stripUrlParams(url, paramsToStrip){
  console.log(paramsToStrip);
  var params = [];
  var o = [];
  var urls = url.split('?');
  
  if(urls.length === 2){
    params = urls[1].split("&");
  }else{
    return   url;
  }
  for(var i = 0;i<params.length;i += 1){
    var a = params[i].split("=");
    if(typeof o[a[0]] === 'undefined'){
      o[a[0]] = a[1];
    }
  }
  if(typeof paramsToStrip !== 'undefined'){
    for(i = 0;i<paramsToStrip.length; i += 1){
      o[paramsToStrip[i]] = undefined;  
    }
  }
  var q = "";
  var a1= [];
  for(key in o){
    if(typeof o[key] !== 'undefined'){
      a1.push(key+'='+o[key]);
    }
  }
    q = a1.join("&");
  return urls[0]+"?"+q;
}