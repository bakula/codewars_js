function LCS(x, y) {
  var shorter = x;
  var longer = y;
  if(shorter.length>longer.length){
    shorter = y;
    longer = x;
  }
  var start = Math.pow(2,shorter.length)-1;
   var txt = '';
  for(var len = start;len>0;len--){
    var a = [];
    for(var idx = 0;idx<shorter.length;idx++){
      if((len&1<<idx)!==0){
        a.push(shorter[idx]);  
      }
    }
    var a_s = a.join('.*');

    var r = new RegExp(a_s);
    var m = longer.match(r );
    if(m!==null && m.length>0 &&  m.join('')!=''){
      if(txt.length<a.length) txt = a.join('');  
    }
  }
  return txt;
}