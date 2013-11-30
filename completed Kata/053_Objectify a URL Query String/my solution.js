function convertQueryToMap(query) {
  if(query==="")return {};

  var ret = {};
  var qs = query.split("&");
  for(var i =0;i<qs.length;i++){
    var r = qs[i];
    var rs = r.split("=");
    var k = rs[0];
    var ks = k.split('.');
    var o = ret;
    for(var i1 =0;i1<ks.length;i1++){
      var key = ks[i1];
      if(typeof o[key] === 'undefined'){
        o[key] = {};
        
      }
      if(i1<ks.length-1)o = o[key];
    }

    o[key] = decodeURIComponent(rs[1])
  }

  return ret;
}