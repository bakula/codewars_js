function pickPeaks(arr){
  var ret = {pos:[],peaks:[]};
  var pos = 1;
  var peak = arr[1];
  var go = 0;
  var isPeak = function(idx,v){
    for(var i1=idx;i1<arr.length;i1++){
      if(arr[i1]>v)return false
      if(arr[i1]<v)return true;
    }  
    return false;
  }
  for(var i = 1;i<arr.length-1;i++){
    
    var c = arr[i];
    if(c>peak){
      if(isPeak(i,c)){
        ret.peaks.push(c);
        ret.pos.push(i);
        peak = c;
      }
    }
    if(c<peak){
      peak = c;  
    }
    
  }
  
    return ret;
}